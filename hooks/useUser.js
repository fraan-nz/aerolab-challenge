import { useContext } from "react";
import { Context } from "../context/context";
import addPoints from "../services/addPoints";

export const useUser = () => {
	const { user, setUser, points, setPoints, loading, setLoading } =
		useContext(Context);

	const add = (amount) => {
		addPoints(amount).then((response) => {
			const newPoints = response.data["New Points"];
			setPoints(newPoints);
		});
	};

	return { user, add, points, setPoints, loading, setLoading };
};
