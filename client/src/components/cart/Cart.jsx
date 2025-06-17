import { useState } from 'react';
import CartProduct from '../cart-product/CartProduct';
import Modal from '../modal/Modal';
import OrderModal from '../order-modal/OrderModal';
import {
	StyledCarbonNeutral,
	StyledCart,
	StyledCartButton,
	StyledCartTitle,
	StyledEmptyCart,
	StyledEmptyCartImage,
	StyledTotalOrder,
	StyledTotalOrderContainer
} from './cart.styles';

const Cart = ({
	cart,
	setCart,
	products,
	setProducts,
	deleteProductFromCart
}) => {
	const [modalContent, setModalContent] = useState();
	const isCartEmpty = cart.length === 0;

	const totalProductsInCart = cart.reduce(
		(acc, product) => product.quantity + acc,
		0
	);

	const totalOrder = cart.reduce(
		(acc, product) => product.price * product.quantity + acc,
		0
	);

	return (
		<StyledCart>
			<StyledCartTitle>
				Your Cart (<span>{totalProductsInCart}</span>)
			</StyledCartTitle>
			{isCartEmpty && (
				<StyledEmptyCart>
					<StyledEmptyCartImage
						src='./assets/images/illustration-empty-cart.svg'
						alt='empty cart image'
					/>
					<p>Your added items will appear here</p>
				</StyledEmptyCart>
			)}
			{!isCartEmpty && (
				<>
					<div>
						{cart.map(cartItem => (
							<CartProduct
								key={cartItem._id}
								cartItem={cartItem}
								cart={cart}
								setCart={setCart}
								deleteProductFromCart={deleteProductFromCart}
							/>
						))}
					</div>

					<StyledTotalOrderContainer>
						<span>Total Order</span>
						<StyledTotalOrder>${totalOrder.toFixed(2)}</StyledTotalOrder>
					</StyledTotalOrderContainer>
					<StyledCarbonNeutral>
						<img src='/assets/images/icon-carbon-neutral.svg' alt='' />
						<p>
							This is a <span>carbon-neutral</span> delivery
						</p>
					</StyledCarbonNeutral>
					<StyledCartButton
						onClick={() => {
							setModalContent(
								<OrderModal
									cart={cart}
									setModalContent={setModalContent}
									setCart={setCart}
								/>
							);

							updateDessertsStock(cart, setProducts);
						}}
					>
						Confirm Order
					</StyledCartButton>
					<Modal>{modalContent}</Modal>
				</>
			)}
		</StyledCart>
	);
};

const updateDessertsStock = async (cart, setProducts) => {
	try {
		const response = await fetch(
			'http://localhost:3000/api/desserts/bulk-stock',
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ cart })
			}
		);

		const data = await response.json();

		if (!response.ok) {
			console.error('Error al actualizar stock:', data.error);
			return;
		}

		// Actualizar productos con los datos retornados del backend
		setProducts(data.products);
	} catch (error) {
		console.error('Error al comunicar con el backend:', error);
	}
};

export default Cart;
