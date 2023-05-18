import React from 'react';

const SignUp = () => {
return (
	<div class="container">
        <h1>Sign up</h1>
		<p>sign up to enjoy the benefits of BookIT</p>
	<div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" />
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" />
          <label for="email">Email</label>
          <span class="helper-text" data-error="wrong" data-success="right">Please insert a correct email</span>
        </div>
      </div>
    </form>
  </div>
	</div>
);
};

export default SignUp;