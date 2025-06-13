import {
	StyledOrderModal,
	StyledOrderProduct,
	StyledOrderProducts
} from './order-modal.styles';

const OrderModal = ({ cart, setModalContent, setCart }) => {
	return (
		<StyledOrderModal>
			<img
				src='/assets/images/icon-order-confirmed.svg'
				alt='order confirmed icon'
			/>
			<h2>Order Confirmed</h2>
			<p>We hope you enjoy your food!</p>
			{cart.map(cartItem => (
				<StyledOrderProducts key={cartItem.id}>
					<StyledOrderProduct>
						<img src={cartItem.imgThumbnail} alt={cartItem.alt} />
						<div>
							<p>{cartItem.title}</p>
							<span>{cartItem.quantity}x</span>
							<span>@ ${cartItem.price.toFixed(2)}</span>
						</div>
						<span>${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
					</StyledOrderProduct>
				</StyledOrderProducts>
			))}
			<button
				onClick={() => {
					setModalContent();
					setCart([]);
				}}
			>
				Start New Order
			</button>
		</StyledOrderModal>
	);
};

export default OrderModal;
