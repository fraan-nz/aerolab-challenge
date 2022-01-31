import React from "react";
import HeroText from "./SectionTop/HeroText";
import HeroButton from "./SectionTop/HeroButton";
import HeroImg from "./HeroImg";
import { StyledHero } from "./StyledHero";
import CardsSection from "./SectionBottom/CardsSection";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Hero() {
	const isBreakpoint = useMediaQuery(1412);
	return (
		<StyledHero>
			<div className="hero__container">
				<div className="hero__text">
					<HeroText />
					<HeroButton />
				</div>
				{!isBreakpoint && <HeroImg />}
			</div>
			<CardsSection />
		</StyledHero>
	);
}

export default Hero;
