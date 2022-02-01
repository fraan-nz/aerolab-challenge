import styled from "styled-components";
const { motion } = require("framer-motion");

export const StyledBalanceModal = styled(motion.div)`
	width: 312px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 16px;
	border: 1px solid ${({ theme }) => theme.colors.neutrals.c300};
	background-color: ${({ theme }) => theme.colors.neutrals.c0};
	box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
	position: absolute;
	right: 2.5%;
	top: 95px;
	display: none;

	@media (max-width: 1024px) {
		right: 4.5%;
	}
	@media (max-width: 375px) {
		right: 5.5%;
	}

	.balance__title {
		width: 100%;
		padding: 16px 24px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.c300};
	}

	.balance__options {
		width: 100%;
		padding-inline: 24px;
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
	}

	& > button {
		width: 264px;
		margin-block: 24px;
	}
`;
