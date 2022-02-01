import axios from "axios";
import { errorToast } from "../components/Toast/Toast";

const addPoints = async (amount) => {
	const points = await axios(
		`${process.env.NEXT_PUBLIC_BASE_URL}/user/points`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
			},
			data: JSON.stringify({ amount }),
		}
	).catch((error) => {
		console.log(error);
		errorToast();
	});
	return points;
};

export default addPoints;
