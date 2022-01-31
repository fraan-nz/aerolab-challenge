import axios from "axios";

const getUser = async () => {
	const user = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/me`, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
		},
	});
	return user;
};

export default getUser;
