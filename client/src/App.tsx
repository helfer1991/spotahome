import React from 'react';
import { ProductsListContainer } from './products-list/products-list-container';
import { Header } from './header';
import { Footer } from './footer';

function App() {
	return (
		<div>
			<Header />
			<ProductsListContainer />
			<Footer />
		</div>
	);
}

export default App;
