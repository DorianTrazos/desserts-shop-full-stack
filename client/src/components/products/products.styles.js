import styled from 'styled-components';

const StyledProducts = styled.div`
	display: grid;

	@media screen and (width>=768px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 32px 24px;
		max-width: 688px;
	}

	@media screen and (width>=1440px) {
		max-width: 800px;
	}
`;

export { StyledProducts };
