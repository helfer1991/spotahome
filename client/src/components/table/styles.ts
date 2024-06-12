import styled from 'styled-components';

// Styled Components
export const TableContainer = styled.div`
	margin: 20px;
	padding: 20px;
	border: 1px solid #ddd;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 20px;
`;

export const TableHead = styled.thead`
	background-color: #f5f5f5;
`;

export const TableHeader = styled.th`
	padding: 12px;
	text-align: left;
	font-weight: bold;
	border-bottom: 2px solid #ddd;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
	&:nth-child(even) {
		background-color: #f9f9f9;
	}
`;

export const TableCell = styled.td`
	padding: 12px;
	border-bottom: 1px solid #ddd;
	text-align: left;

	&:first-child {
		text-align: left;
	}
`;

export const Image = styled.img`
	max-width: 100px;
	border-radius: 8px;
`;

export const Link = styled.a`
	color: #3498db;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`;

export const Description = styled.p`
	margin: 0;
	color: #666;
`;

export const Price = styled.span`
	font-weight: bold;
	color: #2ecc71;
`;

export const Street = styled.p`
	margin: 0;
	color: #666;
`;
