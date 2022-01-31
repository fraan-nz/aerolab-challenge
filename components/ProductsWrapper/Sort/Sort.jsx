import React from "react";
import { useSort } from "../../../hooks/useSort";
import { TextDefaultL1 } from "../../Text/StyledText";
import Button from "../../Button/Button";

const sortOptions = ["Most Recent", "Lowest Price", "Highest Price"];
function Sort() {
	const { sort, setSort } = useSort();
	return (
		<div className="sort__container">
			<TextDefaultL1>Sort by:</TextDefaultL1>
			{sortOptions.map((option, index) => (
				<Button
					size="small"
					bg={sortOptions[index] === sort ? "gradient" : "noselect"}
					key={index}
					onClick={() => setSort(sortOptions[index])}
				>
					<TextDefaultL1 color={sortOptions[index] === sort ? "" : "gradient"}>
						{option}
					</TextDefaultL1>
				</Button>
			))}
		</div>
	);
}

export default Sort;
