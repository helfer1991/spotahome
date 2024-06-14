import React from 'react';
import { PaginationContainer, Button } from './styles';

type PaginationProps = {
	curPage: number;
	totalPages: number;
	nextPage: () => void;
	prevPage: () => void;
};

export const Pagination: React.FC<PaginationProps> = ({
	curPage,
	totalPages,
	nextPage,
	prevPage,
}) => {
	return (
		<PaginationContainer>
			<h6>
				Page {curPage} / {totalPages}
			</h6>
			<Button
				onClick={prevPage}
				disabled={curPage <= 1}
			>
				Previous
			</Button>
			<Button
				onClick={nextPage}
				disabled={curPage >= totalPages}
			>
				Next
			</Button>
		</PaginationContainer>
	);
};
