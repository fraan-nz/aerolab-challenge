import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { StyledFilter } from "./StyledFilter";
import { TextDefaultL1 } from "../../Text/StyledText";
import { filterValues } from "./filterValues";
import { useFilter } from "../../../hooks/useFilter";
import { usePagination } from "../../../hooks/usePagination";

function FilterSelect() {
	const [isOpen, setIsOpen] = useState(false);
	const { filter, setFilter } = useFilter();
	const filterMenu = useRef();
	const { setCurrentPage } = usePagination();

	useEffect(() => {
		if (typeof window !== "undefined") {
			const filterStorage = localStorage.getItem("AerolabFilter");
			if (filterStorage) setFilter(filterStorage);
		}
	}, [setFilter]);

	const handleFilter = (value) => {
		setFilter(value);
		setIsOpen(false);
		setCurrentPage(0);
		localStorage.setItem("AerolabFilter", value);
	};
	const handleKeyFilter = (value, e) => {
		if (e.code === "Enter" || e.charCode === 13) {
			filterMenu.current.focus();
			setFilter(value);
			setIsOpen(false);
			setCurrentPage(0);
			localStorage.setItem("AerolabFilter", value);
		}
	};

	useEffect(() => {
		const clickEvent = (event) => {
			if (
				isOpen === true &&
				filterMenu.current &&
				!filterMenu.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", clickEvent);
		return () => {
			document.removeEventListener("mousedown", clickEvent);
		};
	}, [isOpen]);

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

	return (
		<StyledFilter ref={filterMenu}>
			<button
				className="filter__button"
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Filter products by category"
			>
				<TextDefaultL1>{filter}</TextDefaultL1>
			</button>
			<motion.ul
				animate={isOpen ? "open" : "closed"}
				variants={variants}
				className="filter__options"
			>
				{filterValues.map((value) => (
					<li
						key={value}
						onClick={() => handleFilter(value)}
						onKeyPress={(e) => handleKeyFilter(value, e)}
						tabIndex={isOpen ? 0 : -1}
					>
						<TextDefaultL1>{value}</TextDefaultL1>
					</li>
				))}
			</motion.ul>
		</StyledFilter>
	);
}

export default React.memo(FilterSelect);
