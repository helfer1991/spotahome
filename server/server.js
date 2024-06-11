const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 4000;

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

// Function to start the server
async function startServer() {
	// Create Apollo server
	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start();

	// Apply middleware to Express app
	server.applyMiddleware({ app });

	// Start the Express server
	app.listen(PORT, () => {
		console.log(
			`Server is running at http://localhost:${PORT}${server.graphqlPath}`
		);
	});
}

// Start the server
startServer();
