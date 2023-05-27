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
      <div>
          <h2 className='profile-user-books'>Your book listings</h2>
          <ul>
              {customers.map((customer) => {

                //TODO - fix this so that the if statement actually does something instead of just returning true no matter what
                if(customer.username === localStorage.getItem('authUser').value) {
                  return <li key={customer.id}><h4>{customer.bookName}</h4> <p>Author: {customer.Author}</p></li>
                }
              })}

              
          </ul>
      </div>
  );
}

export default Books;