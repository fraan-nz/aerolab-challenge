import { useContext } from "react";
import { Context } from "../context/context";

const sortOptions = ["Most Recent", "Lowest Price", "Highest Price"];

export const useSort = () => {
	const { sort, setSort } = useContext(Context);

	const sorteredProds = (prods) => {
		switch (sort) {
			case sortOptions[1]: {
				return [...prods].sort((a, b) => a.cost - b.cost);
			}
			case sortOptions[2]: {
				return [...prods].sort((a, b) => b.cost - a.cost);
			}
			case sortOptions[0]:
			default: {
				return prods;
			}
		}
	};

	return { sort, setSort, sorteredProds };
};
