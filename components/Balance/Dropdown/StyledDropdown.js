import styled from "styled-components";

export const StyledDropdown = styled.button`
	min-width: 163px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	border-radius: 16px;
	padding: 8px 16px 8px 16px;
	background-color: ${({ theme }) => theme.colors.neutrals.c0};
	border: 1px solid ${({ theme }) => theme.colors.neutrals.c300};
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
	position: relative;
	cursor: pointer;

	.pay-button__container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	@media (max-width: 1024px) {
		max-height: 40px;
		min-width: 143px;
	}
`;
