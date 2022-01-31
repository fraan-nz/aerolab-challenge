import axios from "axios";

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
	);
	return points;
};

export default addPoints;
