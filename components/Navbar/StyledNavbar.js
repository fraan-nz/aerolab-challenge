import styled from "styled-components";

export const StyledNavbar = styled.nav`
	width: 100%;
	height: 128px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 99;
	background-color: ${({ theme }) => theme.colors.neutrals.c0};

	.navbar__container {
		width: 95%;
		max-width: 1464px;
		min-width: 375px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media (max-width: 1024px) {
			max-width: 985px;
			padding-inline: 20px;
		}

		@media (max-width: 375px) {
			width: 100%;
		}
	}

	& .navbar__container > a {
		border-radius: 12px;
	}

	&.scrolling {
		width: 100%;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
	}
`;
