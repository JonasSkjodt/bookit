import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<div className="container head-nav">
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
		<div className="header-icons">
			<a href="/"><i className="material-icons right">shopping_cart</i></a>
			<a href="/"><i className="material-icons right">search</i></a>
			<a href="/"><i className="material-icons right">account_circle</i></a>
		</div>
	</div>
	</>
);
};

export default Navbar;
