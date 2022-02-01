import React from "react";
import { TitleL1 } from "../components/Titles/StyledTitle";
import { TextDefaultL1 } from "../components/Text/StyledText";
import Link from "next/link";
import Button from "../components/Button/Button";
import { Styled404 } from "../components/404/Styled404";

function Custom404() {
	return (
		<Styled404>
			<TitleL1 color="black">404</TitleL1>
			<TextDefaultL1>This page could not be found.</TextDefaultL1>
			<Link href="/">
				<a tabIndex={-1}>
					<Button bg="gradient" size="small" aria-label="Go to home">
						<TextDefaultL1>Back Home</TextDefaultL1>
					</Button>
				</a>
			</Link>
		</Styled404>
	);
}

export default Custom404;
