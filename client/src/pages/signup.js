import React from 'react';

const SignUp = () => {
return (
	<div className="container">
        <h1>Sign up</h1>
		<p>Sign up to enjoy the benefits of BookIT</p>
	<div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate white-text" />
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate white-text" />
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate white-text" />
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate white-text" />
          <label for="email">Email</label>
          <span className="helper-text" data-error="Please insert a correct email to sign up" data-success="right">Please insert a correct email</span>
        </div>
      </div>
    </form>
  </div>
	</div>
);
};

export default SignUp;