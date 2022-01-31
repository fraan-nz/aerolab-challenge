import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";
import Product from "../components/Product/Product";
import "./matchMedia.mock";

const prod = {
	_id: "5a033f0f364bf301523e9b93",
	name: "iPhone 7 Case Sea-Blue",
	cost: 200,
	category: "Accesorios",
	img: {
		url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
		hdUrl: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
	},
};

describe("Product component", () => {
	it("should render the product", () => {
		render(
			<ThemeProvider theme={theme}>
				<Product {...prod} />
			</ThemeProvider>
		);

		const prodName = screen.getByText(prod.name);
		expect(prodName).toBeInTheDocument();

		const prodCat = screen.getByText(prod.category);
		expect(prodCat).toBeInTheDocument();
	});
});
