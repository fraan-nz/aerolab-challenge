import React from "react";
import Card from "./Card";
import { StyledSection } from "./StyledSection";
import { cardsContent } from "./cardsContent";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import HeroImg from "../HeroImg";

function CardsSection() {
	const isBreakpoint = useMediaQuery(1412);

	return (
		<StyledSection>
			{isBreakpoint && <HeroImg />}
			<div className="card__container">
				{cardsContent.map((card) => (
					<Card {...card} key={card.title} />
				))}
			</div>
		</StyledSection>
	);
}

export default CardsSection;
