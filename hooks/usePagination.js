import { useContext, useEffect } from "react";
import { Context } from "../context/context";
import { useMediaQuery } from "./useMediaQuery";

export const usePagination = (length = 0) => {
	const { currentPage, setCurrentPage, arrLenght, setArrLenght } =
		useContext(Context);
	const isBreakpoint = useMediaQuery(1024);

	useEffect(() => {
		if (length !== 0) {
			setArrLenght(length);
		}
	}, [length, setArrLenght]);

	const perPage = isBreakpoint ? 8 : 16;
	const maxPages = Math.ceil(arrLenght / perPage);

	const nextPage = () => {
		if (currentPage + 1 >= maxPages) {
			return;
		} else {
			setCurrentPage((current) => current + 1);
		}
	};
	const prevPage = () => {
		if (currentPage <= 0) {
			return;
		} else {
			setCurrentPage((current) => current - 1);
		}
	};

	const paginated = (array) => {
		return array.slice(currentPage * perPage, perPage * (currentPage + 1));
	};

	return {
		arrLenght,
		perPage,
		maxPages,
		nextPage,
		prevPage,
		paginated,
		currentPage,
		setCurrentPage,
	};
};
