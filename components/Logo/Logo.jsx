import React from "react";
import Image from "next/image";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Logo() {
	const isBreakpoint = useMediaQuery(1024);
	return (
		<>
			{isBreakpoint ? (
				<Image
					src="/assets/icons/aerolab-logo-2.svg"
					alt="Aerolab logo"
					width={38.77}
					height={36}
				/>
			) : (
				<Image
					src="/assets/icons/aerolab-logo-1.svg"
					alt="Aerolab logo"
					width={126}
					height={48}
				/>
			)}
		</>
	);
}

export default Logo;
