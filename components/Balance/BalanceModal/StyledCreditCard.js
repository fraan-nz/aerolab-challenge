import styled from "styled-components";

export const StyledCreditCard = styled.div`
	width: 264px;
	height: 148px;
	margin-top: 24px;
	border-radius: 8px;
	background: ${({ theme }) => theme.colors.neutrals.c900};
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
	position: relative;

	& > p {
		color: ${({ theme }) => theme.colors.neutrals.c0};
		position: absolute;
	}

	& > p:nth-child(1) {
		top: 16px;
		left: 16px;
	}
	& > p:nth-child(2) {
		bottom: 16px;
		left: 16px;
	}
	& > p:nth-child(3) {
		bottom: 16px;
		right: 16px;
	}
	.card__img {
		position: absolute;
		top: 16px;
		right: 10px;
	}
	&::after {
		content: "";
		width: 100%;
		height: 100%;
		background-image: url(/assets/illustrations/wave-pattern.svg);
		background-size: cover;
		position: absolute;
		bottom: 0;
	}
`;
