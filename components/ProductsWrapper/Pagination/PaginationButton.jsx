import Image from "next/image";
import React from "react";
import { StyledPagButton } from "./StyledPagButton";
import { TextDefaultL1 } from "../../Text/StyledText";
import { usePagination } from "../../../hooks/usePagination";

function PaginationButton() {
	const { nextPage, prevPage, currentPage, maxPages } = usePagination();

	return (
		<StyledPagButton>
			<button
				className={`page-button left ${currentPage === 0 ? "disable" : ""}`}
				onClick={() => prevPage()}
				aria-label="Previous page"
			>
				<Image
					src="/assets/icons/chevron-active.svg"
					alt="left"
					width={40}
					height={40}
					className="arrow--left"
				/>
			</button>
			<TextDefaultL1>Page </TextDefaultL1>{" "}
			<TextDefaultL1 color="gradient">
				{" "}
				{currentPage + 1} of {maxPages}
			</TextDefaultL1>
			<button
				className={`page-button rigth ${
					currentPage + 1 >= maxPages ? "disable" : ""
				}`}
				onClick={() => nextPage()}
				aria-label="Next page"
			>
				<Image
					src="/assets/icons/chevron-active.svg"
					alt="left"
					width={40}
					height={40}
				/>
			</button>
		</StyledPagButton>
	);
}

export default PaginationButton;
