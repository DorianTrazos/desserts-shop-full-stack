import { useEffect, useState } from 'react';
import { PRODUCTS } from '../../constants/products';
import Product from '../product/Product';
import { StyledProducts } from './products.styles';

const Products = ({ filterActive, cart, setCart, deleteProductFromCart }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getInitialProducts(setProducts, setLoading);
	}, []);

	if (loading) return <h2>Loading...</h2>;
	const sortedProducts = sortProducts(products, filterActive);
	return (
		<StyledProducts>
			{sortedProducts.map(product => {
				const isInCart = cart.some(cartItem => cartItem.id === product.id);
				return (
					<Product
						key={product.id}
						product={product}
						isInCart={isInCart}
						cart={cart}
						setCart={setCart}
						deleteProductFromCart={deleteProductFromCart}
					/>
				);
			})}
		</StyledProducts>
	);
};

const sortProducts = (products, filterActive) => {
	const newProducts = [...products];

	switch (filterActive) {
		case 1:
			return newProducts.sort((a, b) => a.title.localeCompare(b.title));
		case 2:
			return newProducts.sort((a, b) => a.price - b.price);
		default:
			return newProducts;
	}
};

const getInitialProducts = async (setProducts, setLoading) => {
	setLoading(true);
	const response = await fetch('http://localhost:3000/api/desserts');
	const desserts = await response.json();
	console.log(desserts);

	setProducts(desserts);
	setLoading(false);
};

export default Products;
