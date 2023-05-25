import React from 'react';
import './contact.css';


const Contact = () => {
return (
	<div className="container">
  <div className="section FAQ white">
    <div className="row container"> 
      <div className="col s12 m6">
        <h3 className="header">FAQ</h3>
        <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
      </div>
    </div>
  </div>

	<h1>Contact</h1>
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