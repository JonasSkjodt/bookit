import { useState } from 'react';
import CreateBook from './createbook.js';
import useLoggedIn from '../components/Navbar/useLoggedIn';
import './profile.css';

const Profile = () => {
	const {loggedIn, setLoggedIn} = useLoggedIn();
	const [setAuthUser] = useState(null);
	const username = localStorage.getItem('authUser');

		return (
			<div className="container">
			<h1>Profile page</h1>
			{loggedIn ? (
				<>
				<span className='user-msg'>Welcome back {username}!</span>
				<div className='user-profile'>
					<div className="row">
						<div className='col s4 m4'>
						<img className='user-img' src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
						</div>
						<CreateBook/>
					</div>
				</div>
				<button onClick={() => {setLoggedIn(false); setAuthUser(null); localStorage.removeItem('authUser'); localStorage.clear()}}>Log out</button>
				</>
				) : (
					<p>Please <a href="/login" rel="">log in</a> to view the full benefits of BookIT.</p>
				)	
			}
			</div>
		);
		};

export default Profile;