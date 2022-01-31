import React from "react";
import { StyledCreditCard } from "./StyledCreditCard";
import { TextDefaultL1, TextDefaultL2 } from "../../Text/StyledText";
import Image from "next/image";
import { useUser } from "../../../hooks/useUser";

function CreditCard() {
	const { user } = useUser();
	return (
		<StyledCreditCard>
			<TextDefaultL1>Aerocard</TextDefaultL1>
			<TextDefaultL2>{user && user.name}</TextDefaultL2>
			<TextDefaultL2>07/23</TextDefaultL2>
			<div className="card__img">
				<Image
					src="/assets/icons/aeropay-2.svg"
					alt="aerocard"
					width={24}
					height={24}
				/>
			</div>
		</StyledCreditCard>
	);
}

export default CreditCard;
