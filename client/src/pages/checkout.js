import React, { useState } from "react";

function makeNumber(str)

const Checkout = () => {
  const [value, setValue] = useState("");
  const [valueDateM, setValueDateM] = useState("");
  const [valueDateY, setValueDateY] = useState("");
  const [valueCVC, setValueCVC] = useState("");

  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValue(result);
  };

  const handleChangeDateM = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    let check = parseInt(result);
    if (check >= 1 && check <= 9) {
      setValueDateM(result);
    } else if (check > 12) {
      setValueDateM("12");
    } else {
      setValueDateM(result);
    }
  };

  const handleChangeDateY = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValueDateY(result);
  };

  const handleChangeCVC = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValueCVC(result);
  };

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
              type="text"
              pattern="\d*"
              max="9999999999999999"
              value={value}
              onChange={handleChange}
              inputmode="numeric"
              maxLength="19"
            />
            <label for="cardnumber">Card Number</label>
            <div className="row">
              <div className="input-field col s1">
                <input
                  className="validate white-text"
                  id="carddate1"
                  type="text"
                  pattern="\d*"
                  inputmode="numeric"
                  placeholder="MM"
                  value={valueDateM}
                  onChange={handleChangeDateM}
                  maxLength="2"
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
                  type="text"
                  pattern="[0-9]"
                  inputmode="number"
                  placeholder="YY"
                  maxLength="4"
                  value={valueDateY}
                  onChange={handleChangeDateY}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s2">
                <input
                  className="validate white-text"
                  id="cardcvc"
                  type="text"
                  pattern="[0-9]"
                  inputmode="number"
                  placeholder="CVC"
                  maxLength="3"
                  value={valueCVC}
                  onChange={handleChangeCVC}
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
