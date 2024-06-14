import styled from 'styled-components';

export const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`;

export const Button = styled.button`
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	padding: 10px 20px;
	margin: 0 10px;
	cursor: pointer;
	font-size: 16px;

	&:disabled {
		background-color: #cccccc;
		cursor: not-allowed;
	}

	&:hover:not(:disabled) {
		background-color: #0056b3;
	}
`;
