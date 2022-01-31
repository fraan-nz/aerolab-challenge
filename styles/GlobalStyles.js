import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body,html{
	width:100%;
	min-width: 375px;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
}
* {
	font-family: 'Montserrat', sans-serif;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}
a {
	text-decoration: none;
}
.layout{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.arrow--down {
	transform: rotate(90deg);
}
.arrow--up {
	transform: rotate(-90deg);
}
.arrow--left {
	transform: rotate(-180deg);
}

`;

export default GlobalStyles;
