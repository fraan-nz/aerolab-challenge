import styled from "styled-components";

export const StyledMain = styled.main`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 128px;
	margin-bottom: 160px;

	@media (max-width: 375px) {
		margin-bottom: 128px;
	}
`;
