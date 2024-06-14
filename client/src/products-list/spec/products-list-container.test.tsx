import React from 'react';
import { render, waitFor, act, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ProductsListContainer } from '../products-list-container'; // Adjust path as needed
import { GET_PRODUCTS } from '../../queries';
import type { Product } from '../products-list-container';

// Mock product data for testing
const mockProducts = [
	{
		id: '1',
		currency: 'USD',
		bedrooms: '2',
		total_rent: '1000',
		area: '100',
		url: 'https://example.com',
		title: 'Example Apartment',
		city: 'New York',
		description: 'A beautiful apartment in downtown.',
		street: '123 Example St',
		pictures: [
			'https://example.com/picture1.jpg',
			'https://example.com/picture2.jpg',
		],
	},
];

// Mock Apollo Client query response
const mocks = [
	{
		request: {
			query: GET_PRODUCTS,
		},
		result: {
			data: {
				products: mockProducts,
			},
		},
	},
];

const MockProductsList: React.FC<{ productsList: Product[] }> = ({
	productsList,
}) => <div>Mock Products List</div>;

jest.mock('../products-list');

describe('ProductsListContainer', () => {
	it('renders loading skeleton initially', async () => {
		const { getByTestId } = render(
			<MockedProvider
				mocks={[]}
				addTypename={false}
			>
				<ProductsListContainer />
			</MockedProvider>
		);

		expect(getByTestId('table-skeleton')).toBeInTheDocument();
	});

	it.only('renders products list after successful data fetch', async () => {
		const { getByTestId, queryByTestId, getByText } = render(
			<MockedProvider
				mocks={mocks}
				addTypename={false}
			>
				<ProductsListContainer />
			</MockedProvider>
		);

		screen.debug();

		await waitFor(() => {
			expect(queryByTestId('table-skeleton')).not.toBeInTheDocument(); // Skeleton should be removed
			expect(getByTestId('Products-List')).toBeInTheDocument(); // Products list should be rendered
		});
	});

	it('renders error message on data fetch error', async () => {
		const errorMock = {
			request: {
				query: GET_PRODUCTS,
			},
			error: new Error('Error fetching data'),
		};

		const { getByText } = render(
			<MockedProvider
				mocks={[errorMock]}
				addTypename={false}
			>
				<ProductsListContainer />
			</MockedProvider>
		);

		await waitFor(() => {
			expect(getByText('Error')).toBeInTheDocument(); // Error message should be rendered
		});
	});
});
