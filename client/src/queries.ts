// src/queries.ts
import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
	query GetProducts {
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
