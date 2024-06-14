const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs/typeDefs');
const resolvers = require('./graphql/resolvers/resolvers');

const app = express();
const PORT = process.env.PORT || 4000;

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
