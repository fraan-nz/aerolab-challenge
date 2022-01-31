import React, { createContext, useState, useEffect } from "react";
import getUser from "../services/getUser";
import { filterValues } from "../components/ProductsWrapper/Filter/filterValues";

export const Context = createContext({});

const sortOptions = ["Most Recent", "Lowest Price", "Highest Price"];
function UserContextProvider({ children }) {
	const [sort, setSort] = useState(sortOptions[0]);
	const [filter, setFilter] = useState(filterValues[0]);
	const [currentPage, setCurrentPage] = useState(0);
	const [arrLenght, setArrLenght] = useState();
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);
	const [points, setPoints] = useState();

	useEffect(() => {
		setLoading(true);
		getUser().then(({ data }) => {
			setUser(data);
			setPoints(data.points);
			setLoading(false);
		});
	}, []);

	return (
		<Context.Provider
			value={{
				sort,
				setSort,
				filter,
				setFilter,
				currentPage,
				setCurrentPage,
				arrLenght,
				setArrLenght,
				user,
				setUser,
				points,
				setPoints,
				loading,
				setLoading,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export default UserContextProvider;
