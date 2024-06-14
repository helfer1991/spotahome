import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../queries';
import { ProductsList } from './products-list';
import { TableSkeleton } from '../table-skeleton';

export type Product = {
	id: string;
	currency: string;
	bedrooms: string;
	total_rent: string;
	area: string;
	url: string;
	title: string;
	city: string;
	description: string;
	street: string;
	pictures: string[];
};

export const ProductsListContainer: React.FC = () => {
	const { loading, error, data } = useQuery<{ products: Product[] }>(
		GET_PRODUCTS
	);

	if (loading) return <TableSkeleton />;
	if (error) return <p>Error</p>;
	if (!data) {
		return <p>Empty state</p>;
	}

	return <ProductsList productsList={data.products} />;
};
