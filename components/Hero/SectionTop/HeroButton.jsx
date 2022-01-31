import React from "react";
import Image from "next/image";
import Button from "../../Button/Button";
import { TextDefaultL1 } from "../../Text/StyledText";
import { StyledIcon } from "../../../styles/StyledIcon";
import Link from "next/link";

function HeroButton() {
	return (
		<Link href="#products-section">
			<a tabIndex={-1}>
				<Button bg="gradient" size="large" aria-label="Go to products">
					<TextDefaultL1>VIEW ALL PRODUCTS</TextDefaultL1>
					<StyledIcon>
						<Image
							src="/assets/icons/Icons.svg"
							alt="icon"
							width={32}
							height={32}
						></Image>
					</StyledIcon>
				</Button>
			</a>
		</Link>
	);
}

export default HeroButton;
