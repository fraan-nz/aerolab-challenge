import axios from "axios";

const redeemItem = async (id) => {
	const response = await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/redeem`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
		},
		data: JSON.stringify({ productId: id }),
	});
	return response;
};

export default redeemItem;
