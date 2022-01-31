import styled from "styled-components";

//gb => gradient | disable | wait | noselect
//size => tiny | small | medium | large

export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	border: none;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
	cursor: pointer;
	z-index: 10;
	position: relative;

	& > * {
		color: ${({ theme }) => theme.colors.neutrals.c0};
	}

	${({ bg, theme }) => {
		if (bg === "gradient") {
			return `
      background: ${theme.colors.brand.default};
      &:hover {
        background: ${theme.colors.brand.hover};
      }
      `;
		}
		if (bg === "wait") {
			return `
      background: ${theme.colors.brand.wait};

      `;
		}
		if (bg === "disable") {
			return `
      background: ${theme.colors.neutrals.c200};
			cursor: default;
      & > * {
        color: ${theme.colors.neutrals.c600};
      }
      `;
		}
		if (bg === "noselect") return `background: ${theme.colors.brand.light};`;
	}}

	${({ size }) => {
		if (size === "tiny") {
			return `
      padding-block: 4px;
      padding-inline: 19px;
      border-radius: 12px;
      `;
		}
		if (size === "small") {
			return `
      padding-block: 8px;
      padding-inline: 24px;
      border-radius: 12px;

      @media (max-width: 375px) {
      padding-inline: 16px;
	    }
      `;
		}
		if (size === "medium") {
			return `
      padding-block: 16px;
      border-radius: 16px;
      width: 100%;
      `;
		}
		if (size === "large") {
			return `
      padding-block: 26.5px;
      padding-inline: 40px;
      border-radius: 24px;

      @media (max-width: 1024px) {
        padding-block: 20px;
      padding-inline: 48px;
	    }
      `;
		}
	}}
`;
