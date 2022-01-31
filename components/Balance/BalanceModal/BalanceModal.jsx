import React, { useState, useRef, useEffect } from "react";
import { StyledBalanceModal } from "./StyledBalanceModal";
import { TextDefaultL1 } from "../../Text/StyledText";
import CreditCard from "./CreditCard";
import Button from "../../Button/Button";
import Image from "next/image";
import { useUser } from "../../../hooks/useUser";

const balanceOptions = [1000, 5000, 7500];
const currencyARS = Intl.NumberFormat("es-AR", {
	style: "decimal",
	currency: "ARS",
});
const variants = {
	open: {
		opacity: 1,
		display: "flex",
		transition: {
			opacity: {
				ease: "easeInOut",
				duration: 0.3,
			},
		},
	},
	closed: {
		opacity: 0,
		display: "none",
		transition: {
			display: { delay: 0.3 },
			opacity: {
				ease: "easeInOut",
				duration: 0.3,
			},
		},
	},
};

function BalanceModal({ isOpen, setIsOpen, btnRef }) {
	const [balance, setBalance] = useState(balanceOptions[0]);
	const { add } = useUser();
	const balanceModal = useRef();

	useEffect(() => {
		const clickEvent = (event) => {
			if (
				isOpen === true &&
				balanceModal.current &&
				!balanceModal.current.contains(event.target) &&
				btnRef.current &&
				!btnRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", clickEvent);
		return () => {
			document.removeEventListener("mousedown", clickEvent);
		};
	}, [isOpen, setIsOpen, btnRef]);

	return (
		<StyledBalanceModal
			animate={isOpen ? "open" : "closed"}
			variants={variants}
			ref={balanceModal}
		>
			<div className="balance__title">
				<TextDefaultL1 color="black">Add Balance</TextDefaultL1>
			</div>
			<CreditCard />
			<div className="balance__options">
				{balanceOptions.map((option, index) => (
					<Button
						size="tiny"
						bg={balanceOptions[index] === balance ? "gradient" : "noselect"}
						key={index}
						onClick={() => setBalance(balanceOptions[index])}
					>
						<TextDefaultL1
							color={balanceOptions[index] === balance ? "" : "gradient"}
						>
							{currencyARS.format(option)}
						</TextDefaultL1>
					</Button>
				))}
			</div>
			<Button bg="gradient" size="small" onClick={() => add(balance)}>
				<Image
					src="/assets/icons/aeropay-3.svg"
					width={24}
					height={24}
					alt="add points image"
				/>
				<TextDefaultL1 aria-label="Add Points">Add Points</TextDefaultL1>
			</Button>
		</StyledBalanceModal>
	);
}

export default BalanceModal;
