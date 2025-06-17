import {
	StyledAddToCart,
	StyledImageContainer,
	StyledName,
	StyledPrice,
	StyledProduct,
	StyledProductStock,
	StyledQuantity,
	StyledQuantityIcon,
	StyledTag
} from './product.styles';

const Product = ({
	product,
	isInCart,
	cart,
	setCart,
	deleteProductFromCart
}) => {
	return (
		<StyledProduct>
			<StyledImageContainer $isInCart={isInCart}>
				<picture>
					<source media='(min-width: 1024px)' srcSet={product.imgDesktop} />
					<source media='(min-width: 768px)' srcSet={product.imgTablet} />
					<source media='(min-width: 320px)' srcSet={product.imgMobile} />
					<img src={product.imgMobile} alt={product.alt} />
				</picture>
				<StyledProductStock>{product.stock}</StyledProductStock>
				{!isInCart && (
					<StyledAddToCart onClick={() => addToCart(product, cart, setCart)}>
						<img src='/assets/images/icon-add-to-cart.svg' alt='' />
						Add To Cart
					</StyledAddToCart>
				)}
				{isInCart && (
					<StyledQuantity>
						<StyledQuantityIcon
							src='/assets/images/icon-decrement-quantity.svg'
							alt='icon cart'
							onClick={() =>
								decrementQuantity(
									product._id,
									cart,
									setCart,
									deleteProductFromCart
								)
							}
						/>
						<span>{product.quantity}</span>
						<StyledQuantityIcon
							src='/assets/images/icon-increment-quantity.svg'
							alt='icon cart'
							onClick={() => incrementQuantity(product._id, cart, setCart)}
						/>
					</StyledQuantity>
				)}
			</StyledImageContainer>
			<StyledTag>{product.name}</StyledTag>
			<StyledName>{product.title}</StyledName>
			<StyledPrice>${product.price.toFixed(2)}</StyledPrice>
		</StyledProduct>
	);
};

const addToCart = (product, cart, setCart) => {
	product.quantity = 1;
	setCart([...cart, product]);
};

const incrementQuantity = (productId, cart, setCart) => {
	const productToUpdate = cart.find(cartItem => cartItem._id === productId);
	if (!productToUpdate) return;
	productToUpdate.quantity++;
	setCart([...cart]);
};

const decrementQuantity = (productId, cart, setCart, deleteProductFromCart) => {
	const productToUpdate = cart.find(cartItem => cartItem._id === productId);

	if (!productToUpdate) return;

	if (productToUpdate.quantity > 1) {
		productToUpdate.quantity--;
		setCart([...cart]);
		return;
	}

	deleteProductFromCart(productId, cart, setCart);
};

export default Product;
