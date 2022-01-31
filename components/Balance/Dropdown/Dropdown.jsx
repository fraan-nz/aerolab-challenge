import React, { useState, useRef } from "react";
import Image from "next/image";
import { TextDefaultL1 } from "../../Text/StyledText";
import { StyledDropdown } from "./StyledDropdown";
import { StyledIcon } from "../../../styles/StyledIcon";
import BalanceModal from "../BalanceModal/BalanceModal";
import { useUser } from "../../../hooks/useUser";
import Spinner from "../../Spinner/Spinner";

const currencyARS = Intl.NumberFormat("es-AR", {
	style: "decimal",
	currency: "ARS",
});

function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const { points, loading } = useUser();
	const balanceButton = useRef();

	return (
		<>
			<StyledDropdown
				onClick={() => setIsOpen(!isOpen)}
				ref={balanceButton}
				aria-label="Available points"
			>
				{loading ? (
					<Spinner />
				) : (
					<>
						<div className="pay-button__container">
							<StyledIcon>
								<Image
									src="/assets/icons/aeropay-1.svg"
									alt="aeropay"
									width={32}
									height={32}
									layout="responsive"
								/>
							</StyledIcon>
							<TextDefaultL1 color="gradient">
								{currencyARS.format(points)}
							</TextDefaultL1>
						</div>
						<Image
							src="/assets/icons/chevron-active.svg"
							width={24}
							height={24}
							alt="chevron"
							className="arrow--down"
						/>
					</>
				)}
			</StyledDropdown>
			<BalanceModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				btnRef={balanceButton}
			/>
		</>
	);
}

export default Dropdown;

{
	/* {loading ? <Spinner /> : currencyARS.format(points)} */
}
