import React from 'react';

const LogIn = () => {
return (
	<div className="container">
        <h1>Login</h1>
	<div className="row">
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
    </form>
  </div>
	</div>
);
};

export default LogIn;