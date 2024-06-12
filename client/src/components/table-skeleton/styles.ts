import styled, { keyframes } from 'styled-components';

export const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const SkeletonContainer = styled.div`
	margin: 68px;
	padding: 20px;
	border: 1px solid #ddd;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SkeletonTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 20px;
`;

export const SkeletonTableHead = styled.thead`
	background-color: #f5f5f5;
`;

export const SkeletonTableHeader = styled.th`
	padding: 12px;
	text-align: left;
	font-weight: bold;
	border-bottom: 2px solid #ddd;
`;

export const SkeletonTableBody = styled.tbody``;

export const SkeletonTableRow = styled.tr`
	&:nth-child(even) {
		background-color: #f9f9f9;
	}
`;

export const SkeletonTableCell = styled.td`
	padding: 12px;
	border-bottom: 1px solid #ddd;
	text-align: center;
`;

export const SkeletonBlock = styled.div`
	width: 100%;
	height: 20px;
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200% 100%;
	animation: ${shimmer} 1.5s infinite;
	border-radius: 4px;
	margin: 4px 0;
`;

export const SkeletonImage = styled.div`
	width: 100px;
	height: 100px;
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200% 100%;
	animation: ${shimmer} 1.5s infinite;
	border-radius: 8px;
`;
