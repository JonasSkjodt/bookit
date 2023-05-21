import React from 'react';
import './login.css';

const LogIn = () => {
  return (
    <div className="container login">
      <h1>Login</h1>
      <div className="row login-box">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="first_name" type="text" className="validate white-text" />
              <label for="first_name">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate white-text" />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row center-align">
            <button type="submit" className="waves-effect waves-light btn-large" onClick={() => onSubmitForm()}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const setAuthUser = (username) => {
  localStorage.setItem('authUser', username);
}

// Event handler for form submissions
const onSubmitForm = () => {
  const username = document.querySelector('#first_name').value;
  const password = document.querySelector('#password').value;

  fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(response => {
    if (response.ok) {
       // Set auth user
       setAuthUser(username);
       // Redirect to profile page
      window.location.href = '/profile';
    } else {
      alert('Login failed!');
    }
  });
}

export default LogIn;