import styled from "styled-components";

export const StyledHeroText = styled.div`
	max-width: 602px;
	p:first-child {
		margin-bottom: 8px;
	}
	p:last-child {
		margin-top: 24px;
	}

	@media (max-width: 1024px) {
		max-width: 289px;
		text-align: center;
	}

	& > h1 {
		display: flex;
		flex-direction: column;
	}
`;
