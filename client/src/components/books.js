import './books.css';
import React, { useEffect, useState } from 'react'; 
import { Link} from 'react-router-dom';

function Books() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
		fetch("/api/customers")
			.then(res => res.json())
			.then(customers => setCustomers(customers));
	})

  return (
      <div className='row'>
          <h2 className='profile-user-books'>Your book listings</h2>
            
            {/*{customers.filter((customer) => customer.username === localStorage.getItem('authUser').value)
          .map((customer) => (*/}
          {customers.map((customer) => (
            //const books = [];
                //if(customer.username === localStorage.getItem('authUser').value) {
                  //books.push(
                    <div key={customer.id} className="col s6 m4 l3">
                    <div className="card bRad">
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
                              >Buy Now</Link>
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
                ))}
              
        
      </div>
  );
}

export default Books;