import styled from 'styled-components';

export const Container = styled.section`
	text-align: center;
`;

export const Image = styled.img`
	height: 100px;
	padding: 24px;
	width: 80%;

	@media (min-width: 500px) {
		width: 400px;
	}
`;
