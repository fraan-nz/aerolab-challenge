import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";
import Hero from "../components/Hero/Hero";
import "./matchMedia.mock";

describe("Hero component", () => {
	it("should render the heading", () => {
		const homeTitle = "tech";

		render(
			<ThemeProvider theme={theme}>
				<Hero />
			</ThemeProvider>
		);
		const title = screen.getByText(homeTitle);

		expect(title).toBeInTheDocument();
	});
});
