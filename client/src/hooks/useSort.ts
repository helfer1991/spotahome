import { useState, useEffect } from 'react';
import type { Product } from '../products-list/products-list-container';

const ITEMS_PER_PAGE = 10;

export const useSortedProducts = (
	productsList: Array<Product>,
	initialSortOption: string = 'price'
) => {
	const [curPage, setCurPage] = useState<number>(1);
	const [sortedList, setSortedList] = useState<Array<Product>>([]);
	const [curPageItems, setCurPageItems] = useState<Array<Product>>([]);
	const [sortOption, setSortOption] = useState<string>(initialSortOption);

	useEffect(() => {
		sortList(initialSortOption);
	}, [productsList]);

	const sortList = (option: string) => {
		const sorted = [...productsList].sort((a, b) => {
			switch (option) {
				case 'price':
					return Number(a.total_rent) - Number(b.total_rent);
				case 'city':
					return a.city.localeCompare(b.city);
				case 'bedrooms':
					return Number(a.bedrooms) - Number(b.bedrooms);
				case 'area':
					return Number(a.area) - Number(b.area);
				default:
					return 0;
			}
		});
		setCurPage(1);
		setSortedList(sorted);
		setCurPageItems(sorted.slice(0, ITEMS_PER_PAGE));
	};

	const handleSortChange = (option: string) => {
		setSortOption(option);
		sortList(option);
	};

	const handleClickFetchMore = () => {
		setCurPage((prevPage: number) => {
			const newPage = prevPage + 1;
			const newItems = sortedList.slice(0, ITEMS_PER_PAGE * newPage);
			setCurPageItems(newItems);
			return newPage;
		});
	};

	return {
		curPageItems,
		sortOption,
		handleSortChange,
		handleClickFetchMore,
	};
};
