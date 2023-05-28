import { useState, useEffect } from 'react';
import CreateBook from './createbook.js';
import useLoggedIn from '../components/Navbar/useLoggedIn';
import Books from '../components/books';
import { Link, useNavigate } from 'react-router-dom';
import './profile.css';

const Profile = () => {
	const {loggedIn, setLoggedIn} = useLoggedIn();
	const [authUser, setAuthUser] = useState(null);
	const [customers, setCustomers] = useState([]);

	useEffect(() => {
		fetch("/api/customers")
			.then(res => res.json())
			.then(customers => setCustomers(customers));
	})
	const [orders, setOrders] = useState([]);
	const username = localStorage.getItem('authUser');

	useEffect(() => {
		fetch("/api/order")
			.then(res => res.json())
			.then(orders => setOrders(orders));
	})

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
							<p>Current Orders</p>
							{/*
							id (should make a random id)
							bookName
							bookAuthor
							price
							isbn
							condition
							username
							*/}
						{orders.length ? orders.map(order => {
							if(order.username === username) {
								if (order.itemIDs && order.itemIDs.length > 0) {
								const itemIDs = order.itemIDs;
								const books = [];
								for(const element of itemIDs) {
									const customer = customers.find(customer => customer.id === element);
									books.push(
										<div key={customer.id} className="col s6 m4 l3">
										<div className="card bRad book-shadow">
												<div className="card-image waves-effect waves-block waves-light bRadT">
												<img className="activator" src="https://source.unsplash.com/random/300×330/?bird" alt="book" />
												</div>
												<div className="card-content">
												<span className="card-title activator white-text text-darken-4 text-overflow">
												{customer.bookName}<i className="material-icons right">more_vert</i>
												  </span>
												  <p>
												  <Link
												  className="book-tag"
												  to = "/product"
												  state={{
													book: customer
												  }}
												  ><i className="material-icons">shopping_cart</i> Buy Now</Link>
												  </p>
												  <a className="btn-floating halfway-fab waves-effect waves-light">
												  {customer.price} Kr.</a>
												</div>
												<div className="card-reveal">
												<span className="card-title grey-text text-darken-4">{customer.bookName}<i className="material-icons right">close</i></span>
												<p className="black-text">ISBN: {customer.isbn}</p>
												<p className="black-text">Condition: {customer.condition}</p>
												<Link
												  to = "/product"
												  state={{
													book: customer
												  }}
												  >
												  See product page
												</Link>
												</div>
											  </div>
											  </div>
						);
							}
							return books;
									} else {
										return null;
									}
								}}) : <p>No orders yet. Start <Link to="/products" rel="">shopping now!</Link></p>}

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
				
				<div className='row'>
				<CreateBook/>
				</div>
				
				<div className=''>
				<Books />
				</div>

				<button className='right waves-effect waves-teal btn-small' onClick={() => {setLoggedIn(false); setAuthUser(null); localStorage.removeItem('authUser'); localStorage.clear()}}>Log out</button>
				</>
				) : (
					<p>Please <a href="/login" rel="">log in</a> to view the full benefits of BookIT.</p>
				)	
			}
			</div>
		);
		};

export default Profile;