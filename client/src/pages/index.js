import React, { useEffect, useState } from 'react'; 
import './index.css';
import Books from '../components/books';
//import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
	const [customers, setCustomers] = useState([]);

	useEffect(() => {
		fetch("/api/customers")
			.then(res => res.json())
			.then(customers => setCustomers(customers));
	})

	return (
		<div className='App'>
			<div className='featured'>
				<div className='container'>
					<div className='section'>
						<div className='featured-product__inner'>
							<div className="featured-product__img">
        						<img src="/alg4book.png"/>
	  						</div>
							  <div className="product-details">
								<div className="product-tag">Featured</div>
									<h2 className="featured-product__title">
									Find your new UniBook now</h2>
								<div className="product-description">
  									<p>At vero eos et accusamus et iusto odio dignissimos
										ducimus qui blanditiis praesentium voluptatum deleniti
										atque corrupti quos dolores et quas molestias excepturi
										sint occaecati cupiditate non provident, similique sunt
										in culpa qui officia deserunt mollitia animi, id est laborum
										et dolorum fuga.</p>
								</div>
								<div className="feat-btns">

								<a href="#bookbrowsing" className="primary-btn waves-effect waves-light">Buy a book</a>
                				<a href="/signup" className="primary-btn feat-details-btn waves-effect waves-light">Become a seller</a>
                				
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			
				<div id="bookbrowsing" className='section section-features'>
				<div className="section-header">
				<div className='container'>
					<h2 className="section-header__title">Browse our books</h2>
					<div className="row">
						
					<Books />
						
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Home;
