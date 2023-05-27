import React from 'react';
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*npm install react-toastify*/
{/* <script async>
      $(document).ready(function() {
      $('.collapsible').collapsible();
      });
</script> */}


const Contact = () => {

return (

	<div className="container contact-page">
  <div className="section">
    <h3 className="header center">Contact us</h3>
    <p>Below you will find a small FAQ that may answer some of your questions. If you still need help after checking this out you can either contact one of our support staff directly
      or you can fill out the form below and we will get back to you as soon as possible.
    </p>
  </div>
  <div className="section spacer">
  </div>
  <div className="section FAQ ">
        <h3 className="header center">FAQ</h3>
    <div className="row container">



    <ul class="m-d expand-list">
	  <li data-md-content="500">
		<label name="tab" for="tab1" tabindex="-1" class="tab_lab" role="tab">How does shipping work?</label>
		<input type="checkbox" class="tab" id="tab1" tabindex="0" />
		<span class="open-close-icon">
			<i class="fas fa-plus"></i>
			<i class="fas fa-minus"></i>
		</span>
		    <div class="content">
        <h5>Shipping</h5>
        Shipping is handled by the user after a sale. We don't charge you until we have received confirmation from the seller that the product is shipped
        and on its way. Shipping is calculated based on your location and the currier the user decides to use so the price will vary and we can therefore not guarantee anything in this regard.
        If you do not receive a package or believe it got lost in transit then please contact our support team and they will be more than happy to help you.
        </div>
    </li>
    <li data-md-content="600">
			<label name="tab" for="tab2" tabindex="-1" class="tab_lab" role="tab">Payment options & pricing?</label>
			<input type="checkbox" class="tab" id="tab2" tabindex="0" />
			<span class="open-close-icon"><i class="fas fa-plus"></i><i class="fas fa-minus"></i></span>
			    <div class="content">
          <h5>Payment options</h5>
            We offer a wide array of payment options that including most of the standards like VISA, MasterCard, mobilePay and so on. The transaction will be held but not charged until the seller
            has notified us that the product is shipped with proof.
            <h5>Pricing</h5>
            We do not set the price of the products, the seller does. The price is calculated based on the condition of the product which can be seen in the product description. If a book is not sold within 30 days
            the seller will be notified that they should lower the price. If the book is not sold within 60 days the seller will be notified again and the book will be removed from the site. If you have any questions
            regarding the pricing of a product please contact the seller as we do not have any direct control over this.
          </div>
    </li>
    <li data-md-content="600">
			<label name="tab" for="tab3" tabindex="-1" class="tab_lab" role="tab">How does it work?</label>
			<input type="checkbox" class="tab" id="tab3" tabindex="0" />
			<span class="open-close-icon"><i class="fas fa-plus"></i><i class="fas fa-minus"></i></span>
          <div class="content">
          <h5>Buy or loan</h5>
        When you find a product you like you can either buy it or loan it. If you loan it you will have to return it within the selected time frame on the product page or you will be charged the full price of the product. 
        Any loaned product will be shipped by by the seller and you will be charged a small fee for this. If you buy a product you will have to pay the full price of the product and shipping will be handled by the seller. 
        Loaning products is a great way to save money if you only need the product for a short period of time or want to try it out before buying it. If you experience any issues with a product you have bought or loaned please contact our support team and they will be more than happy to help you.
        <h5>How to sell</h5>
        Selling a product is easy. All you have to do is create an account and then you can start selling. You will have to provide a description and the condition of the product. You can set the price yourself but we will notify you if we believe the price is too high or too low.
        After a book is sold you will have to ship it to the buyer and notify us that it has been shipped. Once the buyer has received the product and confirmed it we will transfer the money to your account within 3-5 business days. 
        
			    </div>
    </li>
    </ul>
    </div>


  </div>
  <div className="section spacer">
  </div>

  <div className="row container">
    <div className="col s12 m6">
      <div className="section employees_section">
        <div className="row">
          <div className="col s12 m6">
            <img className="employees employees_John" src="https://images.unsplash.com/photo-1618568949779-895d81686151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"></img>
          </div>
          <div className="col s12 m6 employees_text">
            <h4>John Doe</h4>
            <p>IT Expert</p>
            <p>Tel: <a href="tel: +45 12 34 56 78">12 34 56 78</a> </p>
            <p>Email: <a href="mailto: JohnDoe@BookIT.com">JohnDoe@BookIT.com</a> </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col s12 m6">
      <div className="section employees_section">
      <div className="row">
          <div className="col s12 m6">
            <img className="employees employees_Seb" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"></img>
          </div>
          <div className="col s12 m6 employees_text">
            <h4>Sebastian Holst</h4>
            <p>Warehouse</p>
            <p>Tel: <a href="tel: +45 87 65 43 21">87 65 43 21</a></p>
            <p>Email: <a href="mailto: SebHol@BookIT.com">SebHol@BookIT.com</a> </p>
          </div>
        </div>
      </div>    
    </div>
  </div>
	<h1>Contact</h1>
	<p>Contact us if you have any questions or need further help</p>
	<div className="row">
    <form className="col s12">
    <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">mail</i>
          <textarea id="icon_prefix2" className="materialize-textarea white-text"></textarea>
          <label htmlFor="icon_prefix2">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix3" className="materialize-textarea white-text"></textarea>
          <label htmlFor="icon_prefix3">Subject</label>
        </div>
      </div>
	  <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea white-text"></textarea>
          <label htmlFor="textarea1">Your message</label>
        </div>
      </div>
    </form>
    
    <button onClick={() => toast('Thank you for your inquiry. We will get back to you as soon as possible')} className="btn waves-effect waves-light" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
    </button>
    <ToastContainer />

  </div>
	</div>
);
};

export default Contact;