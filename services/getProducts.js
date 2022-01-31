import axios from "axios";

const getProducts = async () => {
	const products = await axios.get(
		`${process.env.NEXT_PUBLIC_BASE_URL}/products`,
		{
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
			},
		}
	);
	return products;
};

export default getProducts;
