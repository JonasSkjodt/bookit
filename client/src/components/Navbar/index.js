import React, {useState, useEffect } from 'react';
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	/*the user is logged in since its set to true*/ 
	const [loggedIn, setLoggedIn] = useState(true);

	useEffect(() => {
	  const authUser = localStorage.getItem('authUser');
	  if (authUser) {
		  setLoggedIn(true)
	  }
	}, []);
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
			<a href="#" className="waves-effect waves-light"><i className="material-icons">shopping_cart</i></a>
			<a href="/search" className="waves-effect waves-light"><i className="material-icons">search</i></a>
			{loggedIn ? (
          			<a href="/profile" className="waves-effect waves-light"><i className="material-icons">account_circle</i></a>
        		) : (
            		<a href="/login" className="waves-effect waves-light"><i className="material-icons">account_circle</i></a>
          		)
			}
		</div>
	</div>
	</>
);
};

export default Navbar;
