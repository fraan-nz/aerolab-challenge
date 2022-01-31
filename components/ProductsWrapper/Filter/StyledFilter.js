import styled from "styled-components";

export const StyledFilter = styled.div`
	width: 256px;
	position: relative;

	@media (max-width: 375px) {
		width: 100%;
	}

	&:focus {
		outline: 2px solid ${({ theme }) => theme.colors.neutrals.c300};
	}

	.filter__button {
		width: 100%;
		height: 59px;
		display: flex;
		justify-content: start;
		align-items: center;
		padding-left: 24px;
		border-radius: 16px;
		border: 1px solid ${({ theme }) => theme.colors.neutrals.c300};
		background: ${({ theme }) => theme.colors.neutrals.c0};
		cursor: pointer;
		position: relative;
	}
	.filter__button::after {
		content: "▼";
		color: ${({ theme }) => theme.colors.neutrals.c900};
		position: absolute;
		right: 12px;
	}

	.filter__options {
		width: 256px;
		list-style: none;
		display: flex;
		flex-direction: column;
		border-radius: 16px;
		padding: 20px 0;
		border: 1px solid ${({ theme }) => theme.colors.neutrals.c300};
		background: ${({ theme }) => theme.colors.neutrals.c0};
		position: absolute;
		top: 67.5px;
		z-index: 11;
		display: none;

		@media (max-width: 375px) {
			width: 100%;
		}
	}

	.filter__options > li {
		padding: 12px 24px;
		cursor: pointer;

		&:hover {
			background-color: ${({ theme }) => theme.colors.neutrals.c100};
		}
	}
`;
