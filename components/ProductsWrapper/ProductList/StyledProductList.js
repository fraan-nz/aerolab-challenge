import styled from "styled-components";

export const StyledProductList = styled.div`
	width: 100%;
	margin-top: 64px;
	margin-bottom: 64px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 348px));
	place-content: center;
	row-gap: 80px;
	column-gap: 24px;

	@media (max-width: 1024px) {
		row-gap: 48px;
	}
`;
