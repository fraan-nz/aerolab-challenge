import styled from "styled-components";

export const StyledFooter = styled.footer`
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme }) => theme.colors.neutrals.c0};

	@media (max-width: 1024px) {
		height: 120px;
	}

	.footer__icon {
		width: 27.97px;
		height: 27.23px;
		margin-bottom: 4px;
		background-image: url("./assets/icons/github-default.svg");
		background-repeat: no-repeat;
		background-size: cover;
	}
	& > a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
	& > a:hover .footer__icon {
		background-image: url("./assets/icons/github-active.svg");
	}
	& > a:hover p {
		background: ${({ theme }) => theme.colors.brand.default};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
	}
`;
