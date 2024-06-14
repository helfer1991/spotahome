import React from 'react';
import { Button } from './styles';

type FetchMoreButtonProps = {
	onClick: () => void;
};

export const FetchMoreButton: React.FC<FetchMoreButtonProps> = ({
	onClick,
}) => <Button onClick={onClick}>Fetch More</Button>;
