import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Checkout from './pages/checkout';
import LogIn from './pages/login';
import Search from './pages/search';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/checkout' element={<Checkout/>} />
		<Route path='/sign-up' element={<SignUp/>} />
		<Route path='/login' element={<LogIn/>} />
		<Route path='/search' element={<Search/>} />
	</Routes>
	<Footer />
	</Router>
);
}

export default App;
