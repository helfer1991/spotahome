const { gql } = require('apollo-server-express');

module.exports = gql`
	type Product {
		id: String
		currency: String
		bedrooms: String
		total_rent: String
		area: String
		url: String
		title: String
		city: String
		street: String
		description: String
		pictures: [String]
	}

	type Query {
		products: [Product]
	}
`;
