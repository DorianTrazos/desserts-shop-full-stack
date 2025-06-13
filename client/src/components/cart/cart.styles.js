import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledCart = styled.aside`
	align-self: flex-start;
	width: 100%;
	padding: 24px;
	border-radius: 12px;
	background-color: ${COLORS.white};

	@media screen and (width>=768px) {
		width: 688px;
	}

	@media screen and (width>=1440px) {
		width: 384px;
	}
`;

const StyledCartTitle = styled.h2`
	color: ${COLORS.red};
	font-size: 24px;
	font-weight: 700;
`;

const StyledEmptyCart = styled.div`
	text-align: center;
`;

const StyledEmptyCartImage = styled.img`
	width: 128px;
	margin-inline: auto;
`;

const StyledTotalOrderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledTotalOrder = styled.span`
	color: ${COLORS.darkRed};
	font-weight: 700;
	font-size: 24px;
	margin-bottom: 24px;
`;

const StyledCarbonNeutral = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 16px 0;
	height: 52px;
	border-radius: 8px;
	margin-bottom: 24px;
	background-color: ${COLORS.softWhite};
	font-size: 14px;
`;

const StyledCartButton = styled.button`
	width: 100%;
	height: 53px;
	border: none;
	border-radius: 27px;
	background-color: ${COLORS.red};
	color: ${COLORS.white};
	font-weight: 600;
`;
export {
	StyledCarbonNeutral,
	StyledCart,
	StyledCartButton,
	StyledCartTitle,
	StyledEmptyCart,
	StyledEmptyCartImage,
	StyledTotalOrder,
	StyledTotalOrderContainer
};
