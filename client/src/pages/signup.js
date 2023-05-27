import React from 'react';
import axios from "axios";
import {randomNumberInRange} from './utilities.js'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      username: event.target.username.value,
      id: randomNumberInRange(),
      password: event.target.password.value,
      email: event.target.email.value
    }
    console.log(user);
    
    axios
      .post("/api/signup", user)
      .then(() => console.log("New user added"))
      .then(() => navigate("/login", { replace: true }))
      .catch((err) => {
        console.log(err);
      });
  };

return (
	<div className="container">
        <h1>Sign up</h1>
		<p>Sign up to enjoy the benefits of BookIT</p>
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate white-text" />
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate white-text" />
            <label htmlFor="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="username" type="text" className="validate white-text" />
            <label htmlFor="username">Username</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate white-text" />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate white-text" />
            <label htmlFor="email">Email</label>
            <span className="helper-text" data-error="Please insert a correct email to sign up" data-success="right">Please insert a correct email</span>
          </div>
        </div>
        <div className="row">
          <div className="Sign-up col s12 center">
            <button className="primary-btn feat-details-btn waves-effect waves-light" type="submit">Sign up</button>
          </div>
        </div>
      </form>
    </div>
	</div>
);
};

export default SignUp;