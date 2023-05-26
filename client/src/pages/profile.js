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
				<p className='user-msg'>Welcome back <span>{username}</span>! Here's a quick overview since your last visit.</p>
				<div className='user-profile'>
					<div className="row">
						<div className='col s12 m4'>
							<img className='user-img' src="https://source.unsplash.com/random/300×300" alt="" />
						</div>
						<div className='col s12 m8'>
							<div className="col s12 m6 p-y-1">
								<div className="user-stat">
									<div className="card-header">
										<i className="front-icon front-activity-white"></i>
									</div>
									<div className="card-content">
										<h4 className="title">1953</h4>
									</div>
									<div className="card-footer">
										<div className="stats">
											<span>Profile Views</span>
										</div>
									</div>
								</div>
							</div>

							<div className="col s12 m6 p-y-1">
								<div className="user-stat">
									<div className="card-header">
										<i className="front-icon front-achievements-white"></i>
									</div>
									<div className="card-content">
										<h4 className="title">152</h4>
									</div>
									<div className="card-footer">
										<div className="stats">
											<span>Achievement Points</span>
										</div>
									</div>
								</div>
							</div>

							<div className="col s12 m6 p-y-1">
								<div className="user-stat">
									<div className="card-header">
										<i className="front-icon front-groups-white"></i>
									</div>
									<div className="card-content">
										<h4 className="title">28</h4>
									</div>
									<div className="card-footer">
										<div className="stats">
											<span>Sold Books</span>
										</div>
									</div>
								</div>
							</div>

							<div className="col s12 m6 p-y-1">
								<div className="user-stat">
									<div className="card-header">
										<i className="front-icon front-friends-white"></i>
									</div>
									<div className="card-content">
										<h4 className="title">59</h4>
									</div>
									<div className="card-footer">
										<div className="stats">
											<span>Number of Friends</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='col s12 m12'>
							<p>Newly added books on BookIT</p>
							<div className=''>
								<div className='col s4 m2'>
								<img className='small-book' src="https://source.unsplash.com/random/35×35" alt="" />
								</div>
								<div className='col s4 m2'>
								<img className='small-book' src="https://source.unsplash.com/random/35×35" alt="" />
								</div>
								<div className='col s4 m2'>
								<img className='small-book' src="https://source.unsplash.com/random/35×35" alt="" />
								</div>
								<div className='col s4 m2'>
								<img className='small-book' src="https://source.unsplash.com/random/35×35" alt="" />
								</div>
								<div className='col s4 m2'>
								<img className='small-book' src="https://source.unsplash.com/random/35×35" alt="" />
								</div>
								<div className='col s4 m2'>
								<img className='small-book' src="https://source.unsplash.com/random/35×35" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<CreateBook/>
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