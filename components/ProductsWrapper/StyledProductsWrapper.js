import styled from "styled-components";

export const StyledProductsWrapper = styled.section`
	width: 95%;
	max-width: 1464px;
	min-width: 375px;
	display: flex;
	flex-direction: column;
	padding-top: 235px;

	@media (max-width: 1024px) {
		max-width: 985px;
		padding-inline: 20px;
		padding-top: 160px;
	}

	@media (max-width: 375px) {
		width: 100%;
		padding-top: 80px;
	}

	.products__title {
		display: flex;
		gap: 15px;
	}
	.products__menu-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 42.5px;

		& > div:nth-child(3) {
			@media (max-width: 645px) {
				display: none;
			}
		}
	}

	.filter__container {
		display: flex;
		align-items: center;
		gap: 16px;
		padding-right: 40px;
		border-right: 2px solid ${({ theme }) => theme.colors.neutrals.c300};

		@media (max-width: 1425px) {
			padding-right: 0;
			border: none;
			gap: 0;

			& > p {
				display: none;
				margin: 0;
			}
		}
		@media (max-width: 375px) {
			width: 100%;
		}
	}
	.sort__container {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-left: 40px;
		flex: 1;
		white-space: nowrap;

		@media (max-width: 1425px) {
			min-width: 100%;
			order: 3;
			margin-left: 0;
			margin-top: 26.5px;
		}

		@media (max-width: 1024px) {
			margin-left: 0;

			& > p {
				display: none;
			}
		}
		@media (max-width: 645px) {
			overflow-x: scroll;
		}

		@media (max-width: 375px) {
			margin-top: 24px;
		}
	}

	.products__menu-bottom {
		display: flex;
		align-items: center;

		@media (max-width: 1024px) {
			flex-direction: column;
			gap: 24px;
		}
	}

	.pagination-bottom__container {
		display: flex;
		justify-content: center;
		margin-left: 273.47px;
		gap: 10px;
		flex: 1;

		@media (max-width: 1024px) {
			margin-left: 0;
			order: 2;
		}
	}
`;
