import React, { useState, useEffect } from "react";
import Link from "next/link";
import Dropdown from "../Balance/Dropdown/Dropdown";
import Logo from "../Logo/Logo";
import { StyledNavbar } from "./StyledNavbar";

function Navbar() {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const changeNavbar = () => {
			if (window.scrollY >= 90) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};
		window.addEventListener("scroll", changeNavbar);

		return () => window.removeEventListener("scroll", changeNavbar);
	}, []);

	return (
		<StyledNavbar className={scrolling ? "scrolling" : ""}>
			<div className="navbar__container">
				<Link href="/">
					<a tabIndex={0} aria-label="Go to home">
						<Logo />
					</a>
				</Link>
				<Dropdown />
			</div>
		</StyledNavbar>
	);
}

export default Navbar;
