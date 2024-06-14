import React, { useState, useMemo } from 'react';
import type { Product } from './products-list-container';
import { Container } from './styles';
import { Table } from '../components/table/table';
import { SelectSort } from '../components/select-sort';
import { useSortedProducts } from '../hooks/useSort';
import { Pagination } from '../components/pagination';

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
	const [sortOption, setSortOption] = useState<string>('');

	const handleSortChange = (option: string) => {
		setSortOption(option);
		sortList(option);
	};

	const sortList = (option: string) => {
		const sorted = [...productsList].sort((a, b) => {
			switch (option) {
				case 'price':
					return Number(a.total_rent) - Number(b.total_rent);
				case 'title':
					return a.title.localeCompare(b.title);
				case 'bedrooms':
					return Number(a.bedrooms) - Number(b.bedrooms);
				case 'area':
					return Number(a.area) - Number(b.area);
				default:
					return 0;
			}
		});
		setCurPage(1);
		setSortedList([...sorted]);
		setCurPageItems(sorted.slice(0, ITEMS_PER_PAGE));
	};

	const handleClickPrevPage = () => {
		setCurPage((prevPage: number) => {
			const newPage = prevPage - 1;
			const startIndex = (newPage - 1) * ITEMS_PER_PAGE;
			const endIndex = newPage * ITEMS_PER_PAGE;
			setCurPageItems(sortedList.slice(startIndex, endIndex));
			return newPage;
		});
	};

	const handleClickNextPage = () => {
		setCurPage((prevPage: number) => {
			const newPage = prevPage + 1;
			const startIndex = prevPage * ITEMS_PER_PAGE;
			const endIndex = (prevPage + 1) * ITEMS_PER_PAGE;

			setCurPageItems(sortedList.slice(startIndex, endIndex));
			return newPage;
		});
	};

	return (
		<Container data-testid='Products-List'>
			<SelectSort
				sortOption={sortOption}
				handleSortOption={handleSortChange}
			/>
			<Table products={curPageItems} />
			<Pagination
				curPage={curPage}
				prevPage={handleClickPrevPage}
				nextPage={handleClickNextPage}
				totalPages={Math.ceil(productsList.length / ITEMS_PER_PAGE)}
			/>
		</Container>
	);
};
