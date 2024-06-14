import React from 'react';
import { ButtonContainer, SortButton } from './styles';

type SortSelectProps = {
	sortOption: string;
	handleSortOption: (option: string) => void;
};

const sortingOptions = ['price', 'title', 'bedrooms'];

export const SelectSort: React.FC<SortSelectProps> = ({
	sortOption,
	handleSortOption,
}) => {
	return (
		<ButtonContainer>
			{sortingOptions.map((option, index) => (
				<SortButton
					key={`${option}-${index}`}
					onClick={() => handleSortOption(option)}
					active={sortOption === option}
				>
					Sort by {option}
				</SortButton>
			))}
		</ButtonContainer>
	);
};
