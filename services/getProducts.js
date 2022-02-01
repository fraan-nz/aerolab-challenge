import axios from "axios";
import { errorServerToast } from "../components/Toast/Toast";

const getProducts = async () => {
	const products = await axios
		.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
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
	return products;
};

export default getProducts;
