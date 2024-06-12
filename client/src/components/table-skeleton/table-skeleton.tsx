import React from 'react';
import {
	shimmer,
	SkeletonContainer,
	SkeletonTable,
	SkeletonTableCell,
	SkeletonBlock,
	SkeletonImage,
	SkeletonTableBody,
	SkeletonTableHead,
	SkeletonTableHeader,
	SkeletonTableRow,
} from './styles';

export const TableSkeleton: React.FC = () => (
	<SkeletonContainer>
		<SkeletonTable>
			<SkeletonTableHead>
				<tr>
					<SkeletonTableHeader>Image</SkeletonTableHeader>
					<SkeletonTableHeader>Description</SkeletonTableHeader>
					<SkeletonTableHeader>Price</SkeletonTableHeader>
					<SkeletonTableHeader>Street</SkeletonTableHeader>
					<SkeletonTableHeader>URL</SkeletonTableHeader>
				</tr>
			</SkeletonTableHead>
			<SkeletonTableBody>
				{[...Array(8)].map((_, index) => (
					<SkeletonTableRow key={index}>
						<SkeletonTableCell>
							<SkeletonImage />
						</SkeletonTableCell>
						<SkeletonTableCell>
							<SkeletonBlock />
						</SkeletonTableCell>
						<SkeletonTableCell>
							<SkeletonBlock />
						</SkeletonTableCell>
						<SkeletonTableCell>
							<SkeletonBlock />
						</SkeletonTableCell>
						<SkeletonTableCell>
							<SkeletonBlock />
						</SkeletonTableCell>
					</SkeletonTableRow>
				))}
			</SkeletonTableBody>
		</SkeletonTable>
	</SkeletonContainer>
);
