import React, { useEffect, useState } from 'react'; 
import './index.css';

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

								<a href="/" className="primary-btn waves-effect waves-light">Add to cart</a>
                				<a href="/" className="primary-btn feat-details-btn waves-effect waves-light">View details</a>
                				
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>

			<div className='container'>
				<div className='section'>
				<div className="section-header">
				<h2 className="section-header__title">Browse our books</h2>
					<div className="row">
						
						{customers.map((customer) => {
							return (
							<div key={customer.id} className="col s12 m3">
								<div className="card bRad">
									<div className="card-image waves-effect waves-block waves-light bRadT">
									<img className="activator" src={customer.image} />
									</div>
									<div className="card-content">
									<span className="card-title activator white-text text-darken-4">
									{customer.bookName}<i className="material-icons right">more_vert</i>
										</span>
										<p><a className="book-title" href="#">{customer.tags}</a></p>
										<a className="btn-floating halfway-fab waves-effect waves-light red">
										<i className="material-icons">favorite</i></a>
									</div>
									<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
									<p>{customer.bookName}  Here is some more information from the express server</p>
									</div>
								</div>
							</div>)
						})}
						
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Home;
