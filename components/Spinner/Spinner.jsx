import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { StyledSpinner } from "./StyledSpinner";

function Spinner() {
	return (
		<StyledSpinner>
			<BeatLoader loading={true} size={20} color={"#176FEB"} />
		</StyledSpinner>
	);
}

export default Spinner;
