import axios from "axios";
import { errorServerToast } from "../components/Toast/Toast";

const getUser = async () => {
	const user = await axios
		.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/me`, {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
			},
		})
		.catch((error) => {
			console.log(error);
			errorServerToast();
		});
	return user;
};

export default getUser;
