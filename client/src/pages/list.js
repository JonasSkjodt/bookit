import { React, useEffect, useState } from 'react'
import './list.css'
import { Link } from 'react-router-dom';

function List(props) {
    const [customers, setCustomers] = useState([]);

	useEffect(() => {
		fetch("/api/customers")
			.then(res => res.json())
			.then(customers => setCustomers(customers));
	})
        var data = customers.map(customer => customer);
    //create a new array by filtering the original array
    const filteredData = data.filter((customer) => {
        //if no input the return the original
        if (props.input === '') {
            return customer;
        }
        //return the item which contains the user input
        else {
            return customer.bookName.toLowerCase().includes(props.input)
        }
    })
    return (
        <div>
        
            {filteredData.map((customer) => (
                
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
            
            ))}
        
        </div>
    )
}

export default List