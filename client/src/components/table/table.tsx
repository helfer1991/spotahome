import React from 'react';
import {
	TableContainer,
	StyledTable,
	TableHead,
	TableHeader,
	TableBody,
	TableRow,
	TableCell,
	Image,
	Link,
	Description,
	Price,
	Street,
} from './styles';

import type { Product } from '../../products-list/products-list-container';

export const Table: React.FC<{ data: Product[] }> = ({ data }) => (
	<TableContainer>
		<StyledTable>
			<TableHead>
				<tr>
					<TableHeader>Image</TableHeader>
					<TableHeader>Title</TableHeader>
					<TableHeader>Price</TableHeader>
					<TableHeader>Street</TableHeader>
					<TableHeader>Bedrooms</TableHeader>
					<TableHeader>URL</TableHeader>
				</tr>
			</TableHead>
			<TableBody>
				{data.map((item, index) => (
					<TableRow key={index}>
						<TableCell>
							<Image
								src={item.pictures[0]}
								alt='product'
							/>
						</TableCell>
						<TableCell>
							<Description>{item.title}</Description>
						</TableCell>
						<TableCell>
							<Price>{item.total_rent}€</Price>
						</TableCell>
						<TableCell>
							<Street>{item.street}</Street>
						</TableCell>
						<TableCell>
							<Street>{item.bedrooms}</Street>
						</TableCell>
						<TableCell>
							<Link
								href={item.url}
								target='_blank'
								rel='noopener noreferrer'
							>
								Link
							</Link>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</StyledTable>
	</TableContainer>
);
