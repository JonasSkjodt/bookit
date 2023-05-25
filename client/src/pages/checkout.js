import React from 'react';

const Checkout = () => {
return (
	<div className="container checkout">
		<h1>Checkout</h1>
		<p>test test test</p>
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
          <input id="email" type="email" className="validate white-text" />
          <label for="email">Email</label>
          <span className="helper-text" data-error="Insert an email again" data-success="right">Insert an email to receive receipt</span>
        </div>
      </div>
    </form>
  	</div>
	<div className="input-field">
		<input id="cardnumber" type="text" pattern="[0-9]" inputmode="numeric"/>
		<label for="cardnumber">cardnumber</label>
	</div>
	
    </div>
);
};

export default Checkout;
