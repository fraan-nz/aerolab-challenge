import styled from "styled-components";

export const StyledHero = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 62px;
	background-image: url(/assets/illustrations/single-wave-pattern.svg);

	.hero__text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 64px;

		@media (max-width: 1412px) {
			align-items: center;
		}

		@media (max-width: 1024px) {
			gap: 40px;
		}
	}

	.hero__container {
		width: 95%;
		max-width: 1464px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 50px;

		@media (max-width: 1412px) {
			flex-direction: column;
			align-items: center;
		}

		@media (max-width: 1024px) {
			max-width: 985px;
			padding-inline: 20px;
			margin-bottom: 0px;
		}

		@media (max-width: 375px) {
			width: 100%;
		}
	}
`;
