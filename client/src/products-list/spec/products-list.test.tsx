// ProductsList.test.tsx

import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import { ProductsList } from '../products-list'; // Assuming your component is named ProductsList

// Mock products data
const mockProducts = [
	{
		id: '1',
		currency: '€',
		bedrooms: '2',
		total_rent: '100',
		area: '200',
		url: '/product/1',
		title: 'Product A',
		city: 'New York',
		description: 'A spacious apartment',
		street: '123 Main St',
		pictures: ['pic1.jpg', 'pic2.jpg'],
	},
	{
		id: '2',
		currency: '€',
		bedrooms: '3',
		total_rent: '150',
		area: '250',
		url: '/product/2',
		title: 'Product B',
		city: 'Los Angeles',
		description: 'A cozy house',
		street: '456 Elm St',
		pictures: ['pic3.jpg', 'pic4.jpg'],
	},
	{
		id: '3',
		currency: '€',
		bedrooms: '2',
		total_rent: '120',
		area: '180',
		url: '/product/3',
		title: 'Product C',
		city: 'Chicago',
		description: 'A modern condo',
		street: '789 Oak St',
		pictures: ['pic5.jpg', 'pic6.jpg'],
	},
	{
		id: '4',
		currency: '€',
		bedrooms: '4',
		total_rent: '180',
		area: '300',
		url: '/product/4',
		title: 'Product D',
		city: 'San Francisco',
		description: 'A luxury penthouse',
		street: '101 Pine St',
		pictures: ['pic7.jpg', 'pic8.jpg'],
	},
	{
		id: '5',
		currency: '€',
		bedrooms: '1',
		total_rent: '90',
		area: '150',
		url: '/product/5',
		title: 'Product E',
		city: 'Miami',
		description: 'A beachfront studio',
		street: '111 Ocean Ave',
		pictures: ['pic9.jpg', 'pic10.jpg'],
	},
	{
		id: '6',
		currency: '€',
		bedrooms: '3',
		total_rent: '200',
		area: '280',
		url: '/product/6',
		title: 'Product F',
		city: 'Seattle',
		description: 'A modern apartment',
		street: '222 Maple St',
		pictures: ['pic11.jpg', 'pic12.jpg'],
	},
	{
		id: '7',
		currency: '€',
		bedrooms: '2',
		total_rent: '110',
		area: '190',
		url: '/product/7',
		title: 'Product G',
		city: 'Boston',
		description: 'A historic townhouse',
		street: '333 Elm St',
		pictures: ['pic13.jpg', 'pic14.jpg'],
	},
	{
		id: '8',
		currency: '€',
		bedrooms: '4',
		total_rent: '300',
		area: '350',
		url: '/product/8',
		title: 'Product H',
		city: 'Austin',
		description: 'A spacious house',
		street: '444 Oak St',
		pictures: ['pic15.jpg', 'pic16.jpg'],
	},
	{
		id: '9',
		currency: '€',
		bedrooms: '1',
		total_rent: '80',
		area: '120',
		url: '/product/9',
		title: 'Product I',
		city: 'Denver',
		description: 'A cozy studio',
		street: '555 Pine St',
		pictures: ['pic17.jpg', 'pic18.jpg'],
	},
	{
		id: '10',
		currency: '€',
		bedrooms: '2',
		total_rent: '130',
		area: '220',
		url: '/product/10',
		title: 'Product J',
		city: 'Portland',
		description: 'A charming condo',
		street: '666 Main St',
		pictures: ['pic19.jpg', 'pic20.jpg'],
	},
	{
		id: '11',
		currency: '€',
		bedrooms: '3',
		total_rent: '170',
		area: '270',
		url: '/product/11',
		title: 'Product K',
		city: 'Orlando',
		description: 'A family home',
		street: '777 Elm St',
		pictures: ['pic21.jpg', 'pic22.jpg'],
	},
	{
		id: '12',
		currency: '€',
		bedrooms: '2',
		total_rent: '140',
		area: '210',
		url: '/product/12',
		title: 'Product L',
		city: 'Phoenix',
		description: 'A desert retreat',
		street: '888 Oak St',
		pictures: ['pic23.jpg', 'pic24.jpg'],
	},
];

const mockProps = {
	productsList: mockProducts,
};

describe('ProductsList component', () => {
	it('renders 3 filter buttons', () => {
		render(<ProductsList {...mockProps} />);

		const sortByPriceButton = screen.getByRole('button', {
			name: 'Sort by price',
		});

		const sortByTitleButton = screen.getByRole('button', {
			name: 'Sort by title',
		});

		const sortByBedroomsButton = screen.getByRole('button', {
			name: 'Sort by bedrooms',
		});

		expect(sortByPriceButton).toBeInTheDocument();
		expect(sortByTitleButton).toBeInTheDocument();
		expect(sortByBedroomsButton).toBeInTheDocument();
	});

	it('displays correct number of items per page initially', () => {
		render(<ProductsList {...mockProps} />);
		expect(screen.getAllByRole('row')).toHaveLength(11); // 11 items are displayed as rows: the first one is related with the description of each column -> Image, title, etc
	});

	it('displays 2 buttons for pagination and the page counter, which is 1 by default', async () => {
		render(<ProductsList {...mockProps} />);

		const prevPageButton = screen.getByRole('button', { name: 'Previous' });
		const nextPageButton = screen.getByRole('button', { name: 'Next' });
		const pageCount = screen.getByRole('heading', { name: 'Page 1 / 2' });

		expect(prevPageButton).toBeInTheDocument();
		expect(nextPageButton).toBeInTheDocument();
		expect(pageCount).toBeInTheDocument();
	});

	it('allows pagination correctly', () => {
		render(<ProductsList {...mockProps} />);

		// Click next page button
		const nextPageButton = screen.getByRole('button', { name: 'Next' });
		let pageCount;

		fireEvent.click(nextPageButton);

		// Verify next page is displayed
		pageCount = screen.getByRole('heading', { name: 'Page 2 / 2' });
		expect(screen.getAllByRole('row')).toHaveLength(3); // Adjust this based on your pagination logic
		expect(pageCount).toBeInTheDocument();

		// Click previous page button
		const prevPageButton = screen.getByRole('button', { name: 'Previous' });
		fireEvent.click(prevPageButton);
		pageCount = screen.getByRole('heading', { name: 'Page 1 / 2' });

		expect(pageCount).toBeInTheDocument();

		// Verify first page is displayed again
		expect(screen.getAllByRole('row')).toHaveLength(11); // 11 items should be displayed on the first page since the first one is the description of each column
	});

	it('sorts items correctly by price', () => {
		render(<ProductsList {...mockProps} />);

		// Click on sort by price option
		const sortByPriceButton = screen.getByRole('button', {
			name: 'Sort by price',
		});

		fireEvent.click(sortByPriceButton);

		// Check if items are sorted correctly
		const allRows = screen.getAllByRole('row');

		expect(within(allRows[1]).getByText('Product I')).toBeInTheDocument();
		expect(within(allRows[2]).getByText('Product E')).toBeInTheDocument();
		expect(within(allRows[3]).getByText('Product A')).toBeInTheDocument();
		expect(within(allRows[10]).getByText('Product D')).toBeInTheDocument();

		expect(allRows).toHaveLength(11); // 11 items are displayed as rows: the first one is related with the description of each column -> Image, title, etc

		//no need to test more, as it would provide no value
	});

	it('displays products sorted by prices also on the second page', () => {
		render(<ProductsList {...mockProps} />);

		// Click on sort by price option
		const sortByPriceButton = screen.getByRole('button', {
			name: 'Sort by price',
		});

		fireEvent.click(sortByPriceButton);

		const nextPageButton = screen.getByRole('button', { name: 'Next' });

		fireEvent.click(nextPageButton);

		// Check if items are sorted correctly
		const allRows = screen.getAllByRole('row');

		expect(within(allRows[1]).getByText('Product F')).toBeInTheDocument();
		expect(within(allRows[2]).getByText('Product H')).toBeInTheDocument();

		expect(allRows).toHaveLength(3); // 3 items are displayed as rows: the first one is related with the description of each column -> Image, title, etc
	});
});
