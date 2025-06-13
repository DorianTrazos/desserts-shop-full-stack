import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledProduct = styled.article`
	margin-bottom: 24px;
`;

const StyledImageContainer = styled.div`
	position: relative;
	margin-bottom: 38px;
	border-radius: 8px;
	outline: 2px solid
		${({ $isInCart }) => ($isInCart ? COLORS.red : 'transparent')};
	transition: outline-color 0.3s;
`;

const StyledButton = styled.button`
	position: absolute;
	bottom: 0;
	left: 50%;
	display: flex;
	align-items: center;
	gap: 12px;
	width: 160px;
	height: 44px;
	border: 1px solid ${COLORS.lightBrown};
	border-radius: 22px;
	background-color: ${COLORS.white};
	translate: -50% 50%;
`;

const StyledAddToCart = styled(StyledButton)`
	gap: 8px;
	padding-inline: 24px;
`;

const StyledQuantity = styled(StyledButton)`
	justify-content: space-between;
	padding-inline: 12px;
	color: ${COLORS.white};
	background-color: ${COLORS.red};
`;

const StyledQuantityIcon = styled.img`
	width: 20px;
	height: 20px;
	border: 1px solid ${COLORS.white};
	border-radius: 50%;
	padding: 4px;
	cursor: pointer;
`;

const StyledTag = styled.span`
	color: ${COLORS.brown};
`;

const StyledName = styled.h2`
	font-size: 16px;
	font-weight: 600;
	margin-block: 4px;
	color: ${COLORS.darkRed};
`;

const StyledPrice = styled.span`
	font-size: 16px;
	font-weight: 600;
	margin-block: 4px;
	color: ${COLORS.red};
`;

export {
	StyledAddToCart,
	StyledImageContainer,
	StyledName,
	StyledPrice,
	StyledProduct,
	StyledQuantity,
	StyledQuantityIcon,
	StyledTag
};
