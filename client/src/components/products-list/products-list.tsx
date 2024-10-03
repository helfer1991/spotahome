import React, { useState } from 'react';
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
	const [list, setList] = useState<Array<Product>>(productsList);
	const [curPageItems, setCurPageItems] = useState<Array<Product>>(
		list.slice(0, ITEMS_PER_PAGE)
	);
	const [sortOption, setSortOption] = useState<string>('');
	const sortedList = useSort(
		list,
		sortOption as 'price' | 'title' | 'bedrooms' | ''
	);
	const [searchItem, setSearchItem] = useState<string>('');

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

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		setSearchItem(e.currentTarget.value);
		setList((prevState) =>
			prevState.filter((item) => item.title.includes(searchItem))
		);
	};

	return (
		<Container>
			<SelectSort
				sortOption={sortOption}
				handleSortOption={handleSortChange}
			/>
			<div>
				<label htmlFor='searchItem'>Search:</label>
				<input
					id='searchItem'
					onChange={handleOnChange}
					placeholder='Search by title'
					value={searchItem}
				/>
			</div>
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
