import styled from 'styled-components';

export const Button = styled.button`
	display: inline-block;
	padding: 10px 20px;
	margin: 20px auto;
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	background-color: #3498db;
	border: none;
	border-radius: 25px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	transition: background-color 0.3s ease, transform 0.3s ease;

	&:hover {
		background-color: #2980b9;
	}

	&:active {
		background-color: #2471a3;
		transform: scale(0.98);
	}

	&:focus {
		outline: none;
	}
`;
