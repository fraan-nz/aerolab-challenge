import React from "react";
import { TextDefaultL1 } from "../../Text/StyledText";
import { usePagination } from "../../../hooks/usePagination";

function TotalProducts() {
	const { arrLenght, perPage, currentPage } = usePagination();
	return (
		<div className="pagination-bottom__container">
			<TextDefaultL1 color="gradient">
				{arrLenght < perPage ? arrLenght : perPage * (currentPage + 1)} of{" "}
				{arrLenght}
			</TextDefaultL1>
			<TextDefaultL1>products</TextDefaultL1>
		</div>
	);
}

export default TotalProducts;
