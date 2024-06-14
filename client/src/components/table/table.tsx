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
	Paragraph,
	Price,
} from './styles';

import type { Product } from '../products-list/products-list-container';

type TableProps = {
	products: Array<Product>;
};

export const Table: React.FC<TableProps> = ({ products }) => (
	<TableContainer>
		<StyledTable>
			<TableHead>
				<tr>
					<TableHeader>Image</TableHeader>
					<TableHeader>Title</TableHeader>
					<TableHeader>Price</TableHeader>
					<TableHeader>City</TableHeader>
					<TableHeader>Bedrooms</TableHeader>
					<TableHeader>URL</TableHeader>
				</tr>
			</TableHead>
			<TableBody>
				{products.map((item) => {
					const capitalizedCity =
						item.city.charAt(0).toUpperCase() + item.city.slice(1);
					return (
						<TableRow key={item.id}>
							<TableCell>
								<Image
									src={item.pictures[0]}
									alt='product-image'
								/>
							</TableCell>
							<TableCell>
								<Paragraph>{item.title}</Paragraph>
							</TableCell>
							<TableCell>
								<Price>{item.total_rent}€</Price>
							</TableCell>
							<TableCell>
								<Paragraph>{capitalizedCity}</Paragraph>
							</TableCell>
							<TableCell>
								<Paragraph>{item.bedrooms}</Paragraph>
							</TableCell>
							<TableCell>
								<Link
									href={item.url}
									target='_blank'
									rel='noopener noreferrer'
								>
									More info
								</Link>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</StyledTable>
	</TableContainer>
);
