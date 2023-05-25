import React from "react";

const Checkout = () => {
  return (
    <div className="container checkout">
      <h1>Checkout</h1>
      <p>test test test</p>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="first_name"
                type="text"
                className="validate white-text"
              />
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="last_name"
                type="text"
                className="validate white-text"
              />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate white-text" />
              <label for="email">Email</label>
              <span
                className="helper-text"
                data-error="Insert an email again"
                data-success="right"
              >
                Insert an email
              </span>
            </div>
          </div>
          <div className="input-field">
            <input
              className="validate white-text"
              id="cardnumber"
              type="number"
              pattern="\d*"
              //pattern="[0-9\s]{13,19}"
              max="9999999999999999"
              inputmode="numeric"
              maxLength="19"
            />
            <label for="cardnumber">Card Number</label>
            <div className="row">
              <div className="input-field col s1">
                <input
                  className="validate white-text"
                  id="carddate1"
                  type="number"
                  pattern="\d*"
                  inputmode="numeric"
                  placeholder="MM"
                  min="01"
                  max="12"
                  maxLength="2"
                  onkeypress="return isNumber(event)"
                />
                <span
                  className="helper-text"
                  data-error="Insert the card number again"
                  data-success="right"
                >
                  Insert the card number
                </span>
              </div>
              <div className="input-field col s1">
                <p> / </p>
              </div>

              <div className="input-field col s1">
                <input
                  className="validate white-text"
                  id="carddate2"
                  type="number"
                  pattern="[0-9]"
                  min="2023"
                  max="2100"
                  inputmode="number"
                  placeholder="YY"
                  maxLength="2"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s2">
                <input
                  className="validate white-text"
                  id="cardcvc"
                  type="number"
                  pattern="[0-9]"
                  inputmode="number"
                  min="000"
                  max="999"
                  placeholder="CVC"
                  maxLength="3"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
