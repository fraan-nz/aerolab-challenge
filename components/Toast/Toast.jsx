import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { StyledToast } from "./StyledToast";
import Image from "next/image";
import { TextDefaultL1 } from "../Text/StyledText";
import theme from "../../styles/Theme";

export const successToast = (name) => {
	return toast.success((t) => (
		<StyledToast>
			<div className="toast__text">
				<TextDefaultL1>
					<span>{name}</span> redeemed successfully
				</TextDefaultL1>
			</div>
			<div onClick={() => toast.dismiss(t.id)} className="toast__close">
				<Image
					src="/assets/icons/cross-default.svg"
					alt="close icon"
					width={24}
					height={24}
				/>
			</div>
		</StyledToast>
	));
};

export const errorToast = () => {
	return toast.error((t) => (
		<StyledToast>
			<div className="toast__text">
				<TextDefaultL1>There was a problem with the transaction</TextDefaultL1>
			</div>
			<div onClick={() => toast.dismiss(t.id)} className="toast__close">
				<Image
					src="/assets/icons/cross-default.svg"
					alt="close icon"
					width={24}
					height={24}
				/>
			</div>
		</StyledToast>
	));
};

export const ToasterComponent = () => (
	<Toaster
		position="bottom-left"
		reverseOrder={true}
		toastOptions={{
			duration: 4000,
			style: {
				minHeight: "min-content",
				width: "100%",
				maxWidth: "532px",
				padding: "24px",
				display: "flex",
				alignItems: "flex-start",
				justifyContent: "center",
			},
			success: {
				style: {
					border: `2px solid ${theme.colors.green.default}`,
				},
				icon: (
					<div style={{ paddingTop: "4px", height: "26px", width: "26px" }}>
						<Image
							src="/assets/icons/system-success.svg"
							alt="success icon"
							width={26}
							height={26}
						/>
					</div>
				),
			},
			error: {
				style: {
					border: `2px solid ${theme.colors.red.default}`,
				},
				icon: (
					<div style={{ paddingTop: "4px", height: "26px", width: "26px" }}>
						<Image
							src="/assets/icons/system-error.svg"
							alt="error icon"
							width={26}
							height={26}
						/>
					</div>
				),
			},
		}}
	/>
);
