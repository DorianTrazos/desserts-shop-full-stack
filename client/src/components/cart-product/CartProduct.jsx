import {
	StyledCartProduct,
	StyledIconRemove,
	StyledProductInfo,
	StyledProductName,
	StyledProductPriceSingle,
	StyledProductPriceTotal,
	StyledProductQuantity
} from './cart-product.styles';

const CartProduct = ({ cartItem, cart, setCart, deleteProductFromCart }) => {
	const { id, title, quantity, price } = cartItem;
	return (
		<StyledCartProduct>
			<StyledProductName>{title}</StyledProductName>
			<StyledProductInfo>
				<StyledProductQuantity>x{quantity}</StyledProductQuantity>
				<StyledProductPriceSingle>@{price}</StyledProductPriceSingle>
				<StyledProductPriceTotal>
					${(price * quantity).toFixed(2)}
				</StyledProductPriceTotal>
				<StyledIconRemove
					src='/assets/images/icon-remove-item.svg'
					alt='delete product icon'
					onClick={() => deleteProductFromCart(id, cart, setCart)}
				/>
			</StyledProductInfo>
		</StyledCartProduct>
	);
};

export default CartProduct;
