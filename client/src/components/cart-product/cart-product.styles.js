import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledCartProduct = styled.div`
	position: relative;
	&:last-child {
		margin-bottom: 24px;
	}
`;

const StyledProductInfo = styled.div`
	display: flex;
	gap: 8px;
	margin-bottom: 16px;
	padding-bottom: 16px;
	border-bottom: 1px solid ${COLORS.softWhite};
`;

const StyledProductName = styled.span`
	color: ${COLORS.darkRed};
	font-weight: 600;
`;

const StyledProductQuantity = styled.span`
	color: ${COLORS.red};
`;

const StyledProductPriceSingle = styled.span`
	color: ${COLORS.brown};
`;

const StyledProductPriceTotal = styled.span`
	color: ${COLORS.brown};
	font-weight: 600;
`;

const StyledIconRemove = styled.img`
	position: absolute;
	top: 13px;
	right: 0;
	width: 20px;
	height: 20px;
	padding: 4px;
	border: 1px solid ${COLORS.lightBrown};
	border-radius: 50%;
`;

export {
	StyledCartProduct,
	StyledIconRemove,
	StyledProductInfo,
	StyledProductName,
	StyledProductPriceSingle,
	StyledProductPriceTotal,
	StyledProductQuantity
};
