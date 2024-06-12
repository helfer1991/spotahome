import React from 'react';
import { Container, Image } from './styles';

export const Header: React.FC = () => {
	return (
		<Container>
			<Image src='/assets/logo-spotahome.svg' />
		</Container>
	);
};
