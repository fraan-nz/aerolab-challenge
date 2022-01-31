import React from "react";
import Image from "next/image";
import { StyledCard } from "./StyledCard";
import { StyledIcon } from "./StyledIcon";
import { TitleL3 } from "../../Titles/StyledTitle";
import { TextDefaultL1 } from "../../Text/StyledText";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

function Card(card) {
	const isBreakpoint = useMediaQuery(1024);
	const { deskImg, mobileImg, alt, title, desc, mobileDesc, icon } = card;
	return (
		<StyledCard>
			<div className="card-img__container">
				<Image
					src={isBreakpoint ? mobileImg : deskImg}
					width={isBreakpoint ? 299 : 508}
					height={isBreakpoint ? 275 : 498}
					alt={alt}
					priority
					objectFit="cover"
					objectPosition="center"
				/>
			</div>
			<div className="card-text__container">
				<div className="card-text__title">
					<StyledIcon>
						<Image src={icon} width={48} height={48} alt={title} />
					</StyledIcon>
					<TitleL3 color="gradient">{title}</TitleL3>
				</div>
				<TextDefaultL1>{isBreakpoint ? mobileDesc : desc}</TextDefaultL1>
			</div>
		</StyledCard>
	);
}

export default Card;
