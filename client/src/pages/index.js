import React, { useEffect, useState } from 'react'; 
import './index.css';
import { Link } from 'react-router-dom';

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
									Find your new book now</h2>
								<div className="product-description">
  									<p>BookIT provides a wide variety of new and used university books.
										Whether you need to buy or borrow a textbook, BookIT has the right resource for you.
										With a wide selection of textbooks and helpful staff,
										this shop is the ultimate destination for university books.</p>
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
						
					{customers.map((customer) => {
							return (
								<div key={customer.id} className="col s12 m4 l3">
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
                              <span className="btn-floating halfway-fab waves-effect waves-light">
                              {customer.price} Kr.</span>
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
						)})}
						
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Home;
