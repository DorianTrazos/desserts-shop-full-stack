import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledOrderModal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	width: 100%;
	max-width: 592px;
	padding: 40px;
	background-color: ${COLORS.white};
`;

const StyledOrderProducts = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	width: 100%;
	padding: 24px;
	background-color: ${COLORS.modalWhite};
`;

const StyledOrderProduct = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 8px;
	margin-bottom: 16px;
	padding-bottom: 16px;
	border-bottom: 1px solid ${COLORS.softWhite};
`;

export { StyledOrderModal, StyledOrderProduct, StyledOrderProducts };
