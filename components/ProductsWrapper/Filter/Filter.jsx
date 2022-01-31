import React from "react";
import { TextDefaultL1 } from "../../Text/StyledText";
import FilterSelect from "./FilterSelect";

function Filter() {
	return (
		<div className="filter__container">
			<TextDefaultL1>Filter by:</TextDefaultL1>
			<FilterSelect />
		</div>
	);
}

export default Filter;
