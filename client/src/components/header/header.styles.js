import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHeader = styled.header`
	padding-block: 26px;

	@media screen and (width>=768px) {
		max-width: 768px;
	}

	@media screen and (width>=1440px) {
		max-width: 1250px;
	}
`;

const StyledFilters = styled.div`
	display: flex;
	gap: 18px;
`;

const StyledButtonFilter = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 77px;
	height: 34px;
	border: 1px solid ${COLORS.lightBrown};
	border-radius: 17px;
	color: ${({ $filterActive, $currentButton }) =>
		$currentButton === $filterActive ? COLORS.white : COLORS.red};
	background-color: ${({ $filterActive, $currentButton }) =>
		$currentButton === $filterActive ? COLORS.red : COLORS.white};
`;

export { StyledButtonFilter, StyledFilters, StyledHeader };
