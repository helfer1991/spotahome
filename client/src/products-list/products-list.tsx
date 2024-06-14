import React, { useState } from 'react';
import type { Product } from './products-list-container';
import { Container } from './styles';
import { Table } from '../components/table/table';
import { FetchMoreButton } from '../components/fetch-more-button';

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
			<Table products={curPageItems} />
			<FetchMoreButton onClick={handleClickFetchMore} />
		</Container>
	);
};
