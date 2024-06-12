import React, { useState } from 'react';
import type { Product } from './products-list-container';
import { Container } from './styles';
import { Table } from '../components/table/table';

type ProductsListProps = {
	productsList: Array<Product>;
};

const ITEMS_PER_PAGE = 10;

export const ProductsList: React.FC<ProductsListProps> = ({ productsList }) => {
	const [curPage, setCurPage] = useState<number>(1);
	const [sortedList, setSortedList] = useState<Array<Product>>([
		...productsList,
	]);
	const [curPageItems, setCurPageItems] = useState<Array<Product>>(
		productsList.slice(0, ITEMS_PER_PAGE)
	);

	console.log(sortedList);

	const handleClickFetchMore = () => {
		setCurPage((prevPage: number) => {
			const newPage = prevPage + 1;
			const newItems = sortedList.slice(0, ITEMS_PER_PAGE * newPage);
			setCurPageItems(newItems);
			return newPage;
		});
	};

	const handleClickSortByPrice = () => {
		const sorted = [...productsList].sort(
			(a, b) => Number(a.total_rent) - Number(b.total_rent)
		);
		setCurPage(1);
		setSortedList(sorted);
		setCurPageItems(sorted.slice(0, ITEMS_PER_PAGE));
	};

	return (
		<Container>
			<button onClick={handleClickSortByPrice}>Sort by price</button>
			<Table data={curPageItems} />
			{curPageItems?.map((product) => (
				<div key={product.id}>
					<h3>
						{product.title} -- ID: {product.id}
					</h3>
					<p>{product.description}</p>
					<p>
						Price: {product.currency} {product.total_rent}
					</p>
					<p>Bedrooms: {product.bedrooms}</p>
					<p>Area: {product.area}</p>
					<p>City: {product.city}</p>
					<a
						href={product.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						More details
					</a>
					<div>
						{product.pictures.map((picture, index) => (
							<img
								key={index}
								src={picture}
								alt={`Product ${index + 1}`}
								width='100'
							/>
						))}
					</div>
				</div>
			))}
			<button onClick={handleClickFetchMore}>Fetch More</button>
		</Container>
	);
};
