import styled from "styled-components";

export const StyledHeroImg = styled.div`
	width: 722px;
	height: 600px;
	border-radius: 104px;
	background: ${({ theme }) => theme.colors.specials.section};
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
	display: flex;
	justify-content: center;

	@media (max-width: 1412px) {
		width: 435px;
		background: transparent;
		box-shadow: none;
		position: absolute;
		bottom: 460px;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		transform: translate(8px, 0px);
	}

	@media (max-width: 1023px) {
		transform: translate(8px, -1000px);
	}

	@media (max-width: 475px) {
		width: 100%;
		transform: translate(0px, -730px);
	}

	.hero-img__container {
		width: 722px;
		height: min-content;
		display: flex;
		justify-content: center;
		align-items: flex-end;

		transform: translateY(-100px);

		@media (max-width: 1412px) {
			transform: translateY(150px);
		}

		@media (max-width: 475px) {
			width: 100%;
		}
	}
`;
