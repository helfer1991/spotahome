import React, { useState, useMemo } from 'react';
import type { Product } from './products-list-container';
import { Container } from './styles';
import { Table } from '../table/table';
import { SelectSort } from '../select-sort';
import { useSort } from '../../hooks/useSort';
import { usePagination } from '../../hooks/usePagination';
import { Pagination } from '../pagination';

type ProductsListProps = {
	productsList: Array<Product>;
};

export const ITEMS_PER_PAGE = 10;

export const ProductsList: React.FC<ProductsListProps> = ({ productsList }) => {
	const [curPageItems, setCurPageItems] = useState<Array<Product>>(
		productsList.slice(0, ITEMS_PER_PAGE)
	);
	const [sortOption, setSortOption] = useState<string>('');
	const sortedList = useSort(
		productsList,
		sortOption as 'price' | 'title' | 'bedrooms' | ''
	);
	const {
		handleClickPrevPage,
		handleClickNextPage,
		curPage,
		setCurPage,
		totalPages,
	} = usePagination(sortedList, setCurPageItems);

	const handleSortChange = (option: string) => {
		setSortOption(option);
		setCurPage(1);
		setCurPageItems(sortedList.slice(0, ITEMS_PER_PAGE));
	};

	return (
		<Container>
			<SelectSort
				sortOption={sortOption}
				handleSortOption={handleSortChange}
			/>
			<Table products={curPageItems} />
			<Pagination
				curPage={curPage}
				prevPage={handleClickPrevPage}
				nextPage={handleClickNextPage}
				totalPages={totalPages}
			/>
		</Container>
	);
};
