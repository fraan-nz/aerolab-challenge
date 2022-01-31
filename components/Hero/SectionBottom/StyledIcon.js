import styled from "styled-components";

export const StyledIcon = styled.div`
	width: 48px;
	height: 48px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.brand.light};

	@media (max-width: 1024px) {
		width: 40px;
		height: 40px;
	}
`;
