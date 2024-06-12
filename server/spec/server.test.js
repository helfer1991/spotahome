const request = require('supertest');
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const nock = require('nock');
const axios = require('axios');

// Mock data to return from the API
const mockData = {
	products: [
		{
			id: '541690',
			currency: 'EUR',
			bedrooms: '4',
			total_rent: '355',
			area: '0',
			url: 'https://spotahome.sjv.io/c/2730283/870243/12133?url=https://www.spotahome.com/alicante/for-rent:rooms/541690',
			title: 'Room in shared apartment in Alicante',
			city: 'alicante',
			description:
				'The Valdes Street Apartment is located in the heart of Alicante...',
			pictures1: 'https://photos.spotahome.com/picture1.jpg',
			pictures2: 'https://photos.spotahome.com/picture2.jpg',
		},
	],
};

// GraphQL schema
const typeDefs = gql`
	type Product {
		id: String
		currency: String
		bedrooms: String
		total_rent: String
		area: String
		url: String
		title: String
		city: String
		description: String
		pictures: [String]
	}

	type Query {
		products: [Product]
	}
`;

// GraphQL resolvers
const resolvers = {
	Query: {
		products: async () => {
			try {
				const response = await axios.get(
					'https://feeds.datafeedwatch.com/35132/f3b6e4d541f33f9dc433d024ecf6b1abf12d9488.json'
				);
				return response.data.products.map((product) => ({
					...product,
					pictures: Object.keys(product)
						.filter((key) => key.startsWith('pictures'))
						.map((key) => product[key]),
				}));
			} catch (error) {
				console.error(error);
				return [];
			}
		},
	},
};

let server;
let app;

// Function to create Apollo Server
async function createServer() {
	app = express();
	server = new ApolloServer({ typeDefs, resolvers });
	await server.start();
	server.applyMiddleware({ app });
	return app;
}

beforeAll(async () => {
	// Mock the external API request
	nock('https://feeds.datafeedwatch.com')
		.get('/35132/f3b6e4d541f33f9dc433d024ecf6b1abf12d9488.json')
		.reply(200, mockData);

	await createServer();
});

afterAll(async () => {
	await server.stop();
	nock.cleanAll();
});

const query = `
query {
  products {
    id
    currency
    bedrooms
    total_rent
    area
    url
    title
    city
    description
    pictures
  }
}
`;

describe('GraphQL API', () => {
	it('fetches products', async () => {
		const response = await request(app)
			.post('/graphql')
			.send({ query })
			.expect(200);

		expect(response.body.data.products).toEqual([
			{
				id: '541690',
				currency: 'EUR',
				bedrooms: '4',
				total_rent: '355',
				area: '0',
				url: 'https://spotahome.sjv.io/c/2730283/870243/12133?url=https://www.spotahome.com/alicante/for-rent:rooms/541690',
				title: 'Room in shared apartment in Alicante',
				city: 'alicante',
				description:
					'The Valdes Street Apartment is located in the heart of Alicante...',
				pictures: [
					'https://photos.spotahome.com/picture1.jpg',
					'https://photos.spotahome.com/picture2.jpg',
				],
			},
		]);
	});

	it('handles an error', async () => {
		// Mock the external API request to return an error
		nock('https://feeds.datafeedwatch.com')
			.get('/35132/f3b6e4d541f33f9dc433d024ecf6b1abf12d9488.json')
			.reply(500, { message: 'Internal Server Error' });

		const response = await request(app)
			.post('/graphql')
			.send({ query })
			.expect(200);

		// Check that the products array is empty due to the error
		expect(response.body.data.products).toEqual([]);
		// Optionally, you can check if an error message is logged
	});
});
