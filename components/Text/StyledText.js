import styled from "styled-components";

export const TextDefaultL1 = styled.p`
	font-size: 18px;
	font-weight: 600;
	line-height: 150%;
	letter-spacing: 0;
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
		font-size: 16px;
	}
`;

export const TextCapsL1 = styled.p`
	font-size: 18px;
	font-weight: 600;
	line-height: 150%;
	letter-spacing: 0.24em;
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
		font-size: 16px;
	}
`;

export const TextMediumL1 = styled.p`
	font-size: 18px;
	font-weight: 500;
	line-height: 150%;
	letter-spacing: 0;
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
		font-size: 16px;
	}
`;

export const TextDefaultL2 = styled.p`
	font-size: 14px;
	font-weight: 600;
	line-height: 150%;
	letter-spacing: 0;
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
		font-size: 12px;
	}
`;

export const TextCapsL2 = styled.p`
	font-size: 14px;
	font-weight: 600;
	line-height: 150%;
	letter-spacing: 0.05em;
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
		font-size: 12px;
	}
`;
