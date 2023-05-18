import React from 'react';

const Contact = () => {
return (
	<div className="container">
	<h1>contact</h1>
	<p>Contact us if you have any questions or need further help</p>
	<div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" className="materialize-textarea white-text"></textarea>
          <label for="icon_prefix2">Subject</label>
        </div>
      </div>
	  <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea white-text"></textarea>
          <label for="textarea1">Your message</label>
        </div>
      </div>
    </form>
  </div>
	</div>
);
};

export default Contact;