import styled from 'styled-components';

const StyledMainContainer = styled.main`
	display: flex;
	flex-direction: column;
	gap: 32px;

	@media screen and (width>=768px) {
		flex-direction: column;
	}

	@media screen and (width>=1440px) {
		flex-direction: row;
		height: fit-content;
	}
`;

export { StyledMainContainer };
