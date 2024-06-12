// src/ProductList.tsx
import React, { useState, useReducer } from 'react';
import type { Product } from './products-list-container';

type ProductsListProps = {
	productsList: Array<Product>;
};

const ITEMS_PER_PAGE = 10;

export const ProductsList: React.FC<ProductsListProps> = ({ productsList }) => {
	const [curPage, setCurPage] = useState<number>(1);
	const [sortedList, setSortedList] = useState<Array<Product>>(productsList);
	const [curPageItems, setCurPageItems] = useState<Array<Product>>(
		productsList.slice(0, ITEMS_PER_PAGE)
	);

	console.log(sortedList);

	const handleClickPrevPage = () => {
		setCurPage((prevPage: number) => {
			const newPage = prevPage - 1;
			const startIndex = (newPage - 1) * ITEMS_PER_PAGE;
			const endIndex = newPage * ITEMS_PER_PAGE;
			setCurPageItems(productsList.slice(startIndex, endIndex));
			return newPage;
		});
	};

	const handleClickNextPage = () => {
		setCurPage((prevPage: number) => {
			const newPage = prevPage + 1;
			const startIndex = newPage * ITEMS_PER_PAGE;
			const endIndex = (newPage + 1) * ITEMS_PER_PAGE;
			setCurPageItems(productsList.slice(startIndex, endIndex));
			return newPage;
		});
	};

	console.log(productsList);

	return (
		<div>
			<button
				onClick={() =>
					setSortedList(
						[...sortedList].sort(
							(a, b) => Number(a.total_rent) - Number(b.total_rent)
						)
					)
				}
			>
				Sort by price
			</button>
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
			<button
				disabled={curPage === 1}
				onClick={handleClickPrevPage}
			>
				Prev Page
			</button>
			<button
				disabled={curPage === Math.ceil(productsList.length / ITEMS_PER_PAGE)}
				onClick={handleClickNextPage}
			>
				Next Page
			</button>
			---------
			{productsList.map((item, index) => (
				<p>
					{index} - {item.title} - {item.total_rent} - ID: {item.id}
				</p>
			))}
		</div>
	);
};
