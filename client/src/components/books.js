import './books.css';
import React, { useEffect, useState } from 'react'; 


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
                
                <div key={customer.id} className="col s6 m3">
                <div className="card bRad">
                    <div className="card-image waves-effect waves-block waves-light bRadT">
                    <img className="activator" src="https://source.unsplash.com/random/298×374" />
                    </div>
                    <div className="card-content">
                    <span className="card-title activator white-text text-darken-4">
                    {customer.bookName}<i className="material-icons right">more_vert</i>
                        </span>
                        <p><a className="book-tag" href="#">{customer.tags}</a></p>
                        <a className="btn-floating halfway-fab waves-effect waves-light red">
                        {customer.price} Kr.</a>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{customer.bookName}<i className="material-icons right">close</i></span>
                    <p className="black-text">{customer.bookName} <span>{customer.about}</span></p>
                    </div>
                </div>
            </div>
            
            ))}
              
        
      </div>
  );
}

export default Books;