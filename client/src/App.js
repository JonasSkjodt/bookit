import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import useLoggedIn from './components/Navbar/useLoggedIn';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Checkout from './pages/checkout';
import LogIn from './pages/login';
import Search from './pages/search';
import Profile from './pages/profile';


function App() {
	/*the user is logged in since its set to true*/ 
	const loggedIn = useLoggedIn();
	
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path="/signup" element={<SignUp />} />
		<Route path="/checkout" element={<Checkout />} />
		{loggedIn ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
            <Route path="/login" element={<LogIn />} />
          )
        }
		<Route path='/search' element={<Search/>} />
	</Routes>
	<Footer />
	</Router>
);
}

export default App;