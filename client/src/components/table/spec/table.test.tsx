import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from '../table';
import type { Product } from '../../../products-list/products-list-container';

const mockProduct: Product = {
	id: '1',
	currency: '€',
	bedrooms: '3',
	total_rent: '1500',
	area: '120',
	url: 'http://example.com/product/1',
	title: 'Beautiful Apartment',
	city: 'berlin',
	description: 'A beautiful apartment in the city center.',
	street: '123 Main St',
	pictures: ['http://example.com/image1.jpg'],
};

describe('Table component', () => {
	it('renders correctly with the provided product', () => {
		render(<Table products={[mockProduct]} />);

		// Verify image
		const image = screen.getByAltText('product-image') as HTMLImageElement;
		expect(image).toBeInTheDocument();
		expect(image.src).toBe(mockProduct.pictures[0]);

		// Verify title
		expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

		// Verify price
		expect(screen.getByText(`${mockProduct.total_rent}€`)).toBeInTheDocument();

		// Verify city (should be capitalized)
		const capitalizedCity =
			mockProduct.city.charAt(0).toUpperCase() + mockProduct.city.slice(1);
		expect(screen.getByText(capitalizedCity)).toBeInTheDocument();

		// Verify bedrooms
		expect(screen.getByText(mockProduct.bedrooms)).toBeInTheDocument();

		// Verify URL link
		const link = screen.getByRole('link', {
			name: 'More info',
		}) as HTMLAnchorElement;
		expect(link).toBeInTheDocument();
		expect(link.href).toBe(mockProduct.url);
	});
});
