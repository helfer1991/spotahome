import { useState, useEffect } from 'react';
import type { Product } from '../components/products-list/products-list-container';

type SortOption = 'price' | 'title' | 'bedrooms' | '';

export const useSort = (
	productsList: Array<Product>,
	sortOption: SortOption
) => {
	const [sortedList, setSortedList] = useState<Array<Product>>(productsList);

	useEffect(() => {
		const sortList = (option: SortOption) => {
			const sorted = [...productsList].sort((a, b) => {
				switch (option) {
					case 'price':
						return Number(a.total_rent) - Number(b.total_rent);
					case 'title':
						return a.title.localeCompare(b.title);
					case 'bedrooms':
						return Number(a.bedrooms) - Number(b.bedrooms);
					default:
						return 0;
				}
			});
			setSortedList(sorted);
		};

		sortList(sortOption);
	}, [sortOption, productsList]);

	return sortedList;
};
