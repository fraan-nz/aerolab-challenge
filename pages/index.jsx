import Hero from "../components/Hero/Hero";
import ProductsWrapper from "../components/ProductsWrapper/ProductsWrapper";
import getProducts from "../services/getProducts";

export default function Home({ products }) {
	return (
		<>
			<Hero />
			<ProductsWrapper products={products} />
		</>
	);
}

export async function getStaticProps() {
	const { data } = await getProducts();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			products: data,
		},
		revalidate: 10,
	};
}
