import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";
import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import ContextProvider from "../context/context";
import { ToasterComponent } from "../components/Toast/Toast";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Aerolab Challenge</title>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<ContextProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
					<ToasterComponent />
				</ContextProvider>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
