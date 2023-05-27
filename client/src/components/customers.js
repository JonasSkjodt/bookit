import './customers.css';
import React, { useEffect, useState } from 'react'; 
import { AppState } from 'react-native';

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
      fetch("/api/customers")
          .then(res => res.json())
          .then(customers => setCustomers(customers));
  })

  useEffect(() => {
    const appStateId = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      appStateId.remove(console.log('the app is closed'));
    };
 }, []);

const handleAppStateChange = (nextAppState) => {
    const exportData = () => {
        
      }; 
}

  return (
      <div>
          <h2>Book Customers</h2>
          <ul>
              {customers.map((customer) => {
                  return <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
              })}
          </ul>
      </div>
  );
}

export default Customers;