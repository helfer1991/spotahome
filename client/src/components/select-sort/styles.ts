import styled from 'styled-components';

export const ButtonContainer = styled.div`
	margin: 20px 0;
	text-align: center;
`;

export const SortButton = styled.button<{ active: boolean }>`
	padding: 10px 20px;
	font-size: 16px;
	font-weight: bold;
	color: ${(props) => (props.active ? '#fff' : '#3498db')};
	background-color: ${(props) => (props.active ? '#3498db' : '#fff')};
	border: 1px solid #3498db;
	border-radius: 25px;
	margin: 0 10px;
	cursor: pointer;
	transition: background-color 0.3s ease, color 0.3s ease;

	&:hover {
		background-color: ${(props) => (props.active ? '#2980b9' : '#ecf0f1')};
		color: ${(props) => (props.active ? '#fff' : '#2980b9')};
	}

	&:focus {
		outline: none;
	}
`;
