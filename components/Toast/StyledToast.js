import styled from "styled-components";

export const StyledToast = styled.div`
	height: min-content;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	.toast__text {
		height: min-content;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 8px;

		& > p > span {
			color: ${({ theme }) => theme.colors.neutrals.c900};
		}
	}
	.toast__close {
		padding-top: 1px;
		height: 26px;
	}
`;
