import styled from 'styled-components';

export const Container = styled.section`
	background: #e3f0fb;
	text-align: center;
`;

export const HomeLogo = styled.img`
	height: 100%;
	margin-right: 150px;
	width: 400px;
`;

export const Image = styled.img`
	height: 100px;
	margin-top: 32px;
	padding: 48px;
	width: 80%;

	@media (min-width: 500px) {
		width: 400px;
	}
`;
