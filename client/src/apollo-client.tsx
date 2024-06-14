import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
});

export const ApolloClientProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => <ApolloProvider client={client}>{children}</ApolloProvider>;
