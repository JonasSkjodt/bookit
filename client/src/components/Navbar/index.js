import React from 'react';
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import useLoggedIn from './useLoggedIn';

const Navbar = () => {
	/*can be found in useLoggedin.js*/ 
	const loggedIn = useLoggedIn();

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
			</NavMenu>
		</Nav>
		<div className="header-icons">
			<a href="/checkout" className="waves-effect waves-light"><i className="material-icons">shopping_cart</i></a>
			<a href="/search" className="waves-effect waves-light"><i className="material-icons">search</i></a>
			{loggedIn ? (
					<a href="/profile" className="waves-effect waves-light"><i className="material-icons">account_circle</i></a>
        		) : (
            		<a href="/login" className="waves-effect waves-light"><button className="waves-effect waves-light">Login</button></a>
          		)
			}
		</div>
	</div>
	</>
);
};

export default Navbar;
