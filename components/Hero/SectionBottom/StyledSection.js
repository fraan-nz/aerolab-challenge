import styled from "styled-components";

export const StyledSection = styled.section`
	width: 100%;
	height: 528px;
	margin-top: 253px;
	display: flex;
	justify-content: center;
	background: ${({ theme }) => theme.colors.specials.section};
	position: relative;

	@media (max-width: 1460px) {
		height: 656px;
		margin-top: 339px;
	}
	@media (max-width: 1023px) {
		height: auto;
		padding-bottom: 32px;
		margin-top: 112px;
	}

	.card__container {
		width: 95%;
		max-width: 1464px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: bottom;

		@media (max-width: 1460px) {
			width: 100%;
			padding-inline: 18px;
			justify-content: space-evenly;
			align-items: flex-end;
			padding-bottom: 32px;
		}
		@media (max-width: 1023px) {
			flex-direction: column;
			align-items: center;
			gap: 24px;
			margin-top: 355px;
			padding-bottom: 0px;
		}
		@media (max-width: 375px) {
			width: 100%;
			margin-top: 298px;
		}

		& > div:nth-child(1) {
			transform: rotate(-3deg) translate(80px, -81px);

			&:hover {
				transform: scale(1.1) rotate(-3deg) translate(80px, -81px);
			}

			@media (max-width: 1460px) {
				transform: rotate(0deg) translate(0px, 0px);

				&:hover {
					transform: scale(1.1);
				}
			}
		}

		& > div:nth-child(2) {
			transform: translateY(-118px);

			&:hover {
				transform: scale(1.1) translateY(-118px);
			}

			@media (max-width: 1460px) {
				transform: translateY(0px);

				&:hover {
					transform: scale(1.1);
				}
			}
		}

		& > div:nth-child(3) {
			transform: rotate(3deg) translate(-80px, -81px);

			&:hover {
				transform: scale(1.1) rotate(3deg) translate(-80px, -81px);
			}

			@media (max-width: 1460px) {
				transform: rotate(0deg) translate(0px, 0px);

				&:hover {
					transform: scale(1.1);
				}
			}
		}
	}
`;
