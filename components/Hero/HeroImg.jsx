import React from "react";
import Image from "next/image";
import { StyledHeroImg } from "./StyledHeroImg";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function HeroImg() {
	const isBreakpoint = useMediaQuery(1412);

	return (
		<StyledHeroImg>
			<div className="hero-img__container">
				<Image
					src={
						isBreakpoint
							? "/assets/illustrations/hero-responsive.png"
							: "/assets/illustrations/hero-desktop.png"
					}
					alt="hero image"
					width={isBreakpoint ? 435 : 700}
					height={isBreakpoint ? 435 : 700}
					objectFit="contain"
					objectPosition="bottom"
				></Image>
			</div>
		</StyledHeroImg>
	);
}

export default HeroImg;
