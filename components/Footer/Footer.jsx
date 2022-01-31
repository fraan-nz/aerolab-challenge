import React from "react";
import { StyledFooter } from "./StyledFooter";
import { TextDefaultL1 } from "../Text/StyledText";
import Link from "next/link";

function Footer() {
	return (
		<StyledFooter>
			<Link href="https://github.com/fraan-nz/aerolab-challenge">
				<a>
					<div className="footer__icon"></div>
					<TextDefaultL1>View this repository</TextDefaultL1>
				</a>
			</Link>
		</StyledFooter>
	);
}

export default Footer;
