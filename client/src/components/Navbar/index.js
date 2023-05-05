import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/" activestyle="true">
			Home
		</NavLink>
		<NavLink to="/about" activestyle="true">
			About
		</NavLink>
		<NavLink to="/contact" activestyle="true">
			Contact Us
		</NavLink>
		<NavLink to="/checkout" activestyle="true">
			Checkout
		</NavLink>
		<NavLink to="/sign-up" activestyle="true">
			Sign Up
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
