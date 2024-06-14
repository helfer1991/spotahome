import React from 'react';
import { ProductsListContainer } from './components/products-list/products-list-container';
import { Header } from './components/header';
import { Footer } from './components/footer';

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
