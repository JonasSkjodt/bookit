import { React, useEffect, useState } from 'react'
import './list.css'


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
                
                <div key={customer.id} className="col s6 m3">
                <div className="card bRad">
                    <div className="card-image waves-effect waves-block waves-light bRadT">
                    <img className="activator" src={customer.image} />
                    </div>
                    <div className="card-content">
                    <span className="card-title activator white-text text-darken-4">
                    {customer.bookName}<i className="material-icons right">more_vert</i>
                        </span>
                        <p><a className="book-tag" href="#">{customer.tags}</a></p>
                        <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">favorite</i></a>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{customer.bookName}<i className="material-icons right">close</i></span>
                    <p className="black-text">{customer.bookName} <span>{customer.about}</span></p>
                    </div>
                </div>
            </div>
            
            ))}
        
        </div>
    )
}

export default List