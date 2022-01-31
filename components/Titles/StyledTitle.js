import styled from "styled-components";

export const TitleL1 = styled.span`
	font-size: 200px;
	font-weight: 900;
	line-height: 80%;
	letter-spacing: 0;
	text-transform: uppercase;
	${({ color, theme }) => {
		if (color === undefined) return `color: ${theme.colors.neutrals.c600};`;
		if (color === "black") return `color: ${theme.colors.neutrals.c900};`;
		if (color === "gradient") {
			return `background: ${theme.colors.brand.default};
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-moz-text-fill-color: transparent;`;
		}
	}}

	@media (max-width: 1024px) {
		font-size: 96px;
	}
`;

export const TitleL2 = styled.h2`
	font-size: 48px;
	font-weight: 900;
	line-height: 80%;
	letter-spacing: 0;
	text-transform: uppercase;
	${({ color, theme }) => {
		if (color === undefined) return `color: ${theme.colors.neutrals.c600};`;
		if (color === "black") return `color: ${theme.colors.neutrals.c900};`;
		if (color === "gradient") {
			return `background: ${theme.colors.brand.default};
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-moz-text-fill-color: transparent;`;
		}
	}}

	@media (max-width: 1024px) {
		font-size: 32px;
	}
`;

export const TitleL3 = styled.h3`
	font-size: 32px;
	font-weight: 900;
	line-height: 100%;
	letter-spacing: 0;
	text-transform: uppercase;
	${({ color, theme }) => {
		if (color === undefined) return `color: ${theme.colors.neutrals.c600};`;
		if (color === "black") return `color: ${theme.colors.neutrals.c900};`;
		if (color === "gradient") {
			return `background: ${theme.colors.brand.default};
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-moz-text-fill-color: transparent;`;
		}
	}}

	@media (max-width: 1024px) {
		font-size: 24px;
	}
`;
