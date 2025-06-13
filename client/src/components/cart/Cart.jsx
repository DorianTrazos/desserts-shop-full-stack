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

const Cart = ({ cart, setCart, deleteProductFromCart }) => {
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
								key={cartItem.id}
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
						onClick={() =>
							setModalContent(
								<OrderModal
									cart={cart}
									setModalContent={setModalContent}
									setCart={setCart}
								/>
							)
						}
					>
						Confirm Order
					</StyledCartButton>
					<Modal>{modalContent}</Modal>
				</>
			)}
		</StyledCart>
	);
};

export default Cart;
