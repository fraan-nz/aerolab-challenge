import { useContext } from "react";
import { Context } from "../context/context";
import { filterValues } from "../components/ProductsWrapper/Filter/filterValues";

export const useFilter = () => {
	const { filter, setFilter } = useContext(Context);

	const filteredProds = (prods) => {
		if (filter.toLowerCase() === filterValues[0].toLowerCase()) return prods;
		return prods.filter(
			(prod) => prod.category.toLowerCase() === filter.toLowerCase()
		);
	};

	return { filter, setFilter, filteredProds };
};
