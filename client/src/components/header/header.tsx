import React from 'react';
import { Container, HomeLogo, Image } from './styles';

export const Header: React.FC = () => {
	return (
		<Container>
			<HomeLogo
				alt='home logo'
				src='/assets/spotahome_house_logo.svg'
			/>
			<Image
				alt='spotahome logo'
				src='/assets/logo-spotahome.svg'
			/>
		</Container>
	);
};
