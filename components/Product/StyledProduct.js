import styled from "styled-components";

export const StyledProduct = styled.div`
	width: 100%;
	max-width: 348px;

	.product__image {
		width: 100%;
		height: 344.92px;
		border-radius: 16px 16px 0px 0px;
		border: 1px solid ${({ theme }) => theme.colors.neutrals.c300};

		@media (max-width: 375px) {
			height: 353.97px;
		}
	}
	.product__title {
		width: 100%;
		height: 88px;
		border-radius: 0px 0px 16px 16px;
		border: 1px solid ${({ theme }) => theme.colors.neutrals.c300};
		padding: 16px 24px;
		margin-bottom: 16px;

		@media (max-width: 375px) {
			height: 82px;
		}
	}

	& > button:hover .button__hover {
		display: block;
	}
	& > button:hover .button__data {
		display: none;
	}

	.button__hover {
		display: none;
	}
	.button__data {
		display: flex;
		gap: 8px;
		& > p {
			color: ${({ theme }) => theme.colors.neutrals.c0};
		}
	}
	.button__data.disable {
		& > p {
			color: ${({ theme }) => theme.colors.neutrals.c600};
		}
	}
`;
