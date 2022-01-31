import styled from "styled-components";

export const StyledPagButton = styled.div`
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding: 12px 16px;
	border: 1px solid ${({ theme }) => theme.colors.neutrals.c300};
	border-radius: 16px;
	background-color: ${({ theme }) => theme.colors.neutrals.c0};

	.page-button {
		width: 40px;
		height: 40px;
		border: none;
		border-radius: 8px;
		background-color: ${({ theme }) => theme.colors.brand.light};
		padding: 10px;
		cursor: pointer;
	}
	.left {
		margin-right: 14px;
	}
	.rigth {
		margin-left: 14px;
	}

	.disable {
		background-color: ${({ theme }) => theme.colors.neutrals.c200};
		opacity: 0.5;
		cursor: default;
	}
`;
