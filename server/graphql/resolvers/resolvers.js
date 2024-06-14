const axios = require('axios');

module.exports = {
	Query: {
		products: async () => {
			try {
				const response = await axios.get(
					'https://feeds.datafeedwatch.com/35132/f3b6e4d541f33f9dc433d024ecf6b1abf12d9488.json'
				);
				return response.data.products.map((product) => {
					return {
						id: product.id,
						bedrooms: product.bedrooms,
						total_rent: product.total_rent,
						area: product.area,
						url: product.url,
						title: product.title,
						city: product.city,
						street: product.street,
						pictures: [product.pictures1],
					};
				});
			} catch (error) {
				console.error(error);
				return [];
			}
		},
	},
};
