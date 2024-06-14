import { useState, useEffect } from 'react';
import type { Product } from '../components/products-list/products-list-container';
import { ITEMS_PER_PAGE } from '../components/products-list/products-list';

export const usePagination = (
	productsList: Array<Product>,
	setCurPageItems: React.Dispatch<React.SetStateAction<Array<Product>>>
) => {
	const [curPage, setCurPage] = useState<number>(1);

	useEffect(() => {
		setCurPageItems(productsList.slice(0, ITEMS_PER_PAGE));
		setCurPage(1);
	}, [productsList, ITEMS_PER_PAGE]);

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
			const startIndex = prevPage * ITEMS_PER_PAGE;
			const endIndex = (prevPage + 1) * ITEMS_PER_PAGE;
			setCurPageItems(productsList.slice(startIndex, endIndex));
			return newPage;
		});
	};

	return {
		curPage,
		setCurPage,
		handleClickPrevPage,
		handleClickNextPage,
		totalPages: Math.ceil(productsList.length / ITEMS_PER_PAGE),
	};
};
