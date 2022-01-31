import styled from "styled-components";

export const StyledCard = styled.div`
	height: 676px;
	width: 100%;
	max-width: 532px;
	border-radius: 32px;
	padding: 12px;
	border: 1px solid ${({ theme }) => theme.colors.neutrals.c300};
	background-color: ${({ theme }) => theme.colors.neutrals.c0};
	box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
	transition: transform 0.3s ease-in-out;
	left: -100%;

	&:hover {
		z-index: 10;
	}

	@media (max-width: 1460px) {
		max-width: 323px;
		height: 477px;
		background: rgba(255, 255, 255, 0.7);
	}
	@media (max-width: 475px) {
		width: 100%;
		max-width: 335px;
		height: 408px;
	}

	.card-img__container {
		width: 100%;
		height: 100%;
		max-height: 498px;
		border-top-left-radius: 32px;
		border-top-right-radius: 32px;
		display: flex;
		background: ${({ theme }) => theme.colors.specials.illustration};
		border: 1px solid ${({ theme }) => theme.colors.neutrals.c300};

		@media (max-width: 1460px) {
			height: 290px;
		}
		@media (max-width: 475px) {
			width: 100%;
			height: 245px;
			& > img {
				margin-top: 20px;
			}
		}
	}
	.card-text__container {
		width: 100%;
		height: 154px;
		padding: 16px 70px 24px 24px;
		border-bottom-left-radius: 32px;
		border-bottom-right-radius: 32px;
		border: 1px solid ${({ theme }) => theme.colors.neutrals.c300};

		@media (max-width: 1460px) {
			height: 164px;
			padding: 16px 20px 24px 24px;
			& > p {
				font-size: 16px;
			}
		}
		@media (max-width: 475px) {
			height: 140px;
		}
	}

	.card-text__title {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-bottom: 12px;

		@media (max-width: 1460px) {
			& > h3 {
				font-size: 24px;
			}
		}
	}
`;
