import React from "react";
import { TextCapsL1, TextDefaultL1 } from "../../Text/StyledText";
import { TitleL1 } from "../../Titles/StyledTitle";
import { StyledHeroText } from "./StyledHeroText";

function HeroText() {
	return (
		<StyledHeroText>
			<TextCapsL1>explore the</TextCapsL1>
			<h1>
				<TitleL1 color="gradient">tech</TitleL1>
				<TitleL1 color="black">zone</TitleL1>
			</h1>
			<TextDefaultL1>
				Here you’ll be able to exchange all of your hard-earned Aeropoints and
				exchange them for cool tech.
			</TextDefaultL1>
		</StyledHeroText>
	);
}

export default HeroText;
