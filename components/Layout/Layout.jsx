import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { StyledMain } from "./StyledMain";

function Layout({ children }) {
	return (
		<div className="layout">
			<Navbar />
			<StyledMain>{children}</StyledMain>
			<Footer />
		</div>
	);
}

export default Layout;
