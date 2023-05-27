import React, { useEffect, useState } from "react";
import axios from "axios";
import "./checkout.css";

const Checkout = () => {
  const [valueFirstName, setValueFirstName] = useState("");
  const [valueLastName, setValueLastName] = useState("");
  const [valueAddress, setValueAddress] = useState("");
  const [valueZip, setValueZip] = useState("");
  const [valueCity, setValueCity] = useState("");
  const [valueCountry, setValueCountry] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueNumber, setValueNumber] = useState("");
  const [valueDateM, setValueDateM] = useState("");
  const [valueDateY, setValueDateY] = useState("");
  const [valueCVC, setValueCVC] = useState("");
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((customers) => setCustomers(customers));
  });

  const handleChangeZip = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValueZip(result);
  };

  const handleChangeNumber = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValueNumber(result);
  };

  const handleChangeDateM = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    let check = parseInt(result);
    if (check > 12) {
      setValueDateM("12");
    } else {
      setValueDateM(result);
    }
  };

  const handleOnBlurDateM = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    let check = parseInt(result);
    if (check >= 1 && check <= 9) {
      setValueDateM("0" + check);
    } else {
      setValueDateM(result);
    }
  };

  const handleChangeDateY = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    let check = parseInt(result);
    if (check > 29) {
      setValueDateY("29");
    } else {
      setValueDateY(result);
    }
  };

  const handleChangeCVC = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValueCVC(result);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let checkDateY = parseInt(valueDateY);
    if (checkDateY < 23) {
      alert("Check if year is insert correctly");
      return false;
    }

    const order = {
      valueFirstName,
      valueLastName,
      valueAddress,
      valueZip,
      valueCity,
      valueCountry,
      valueEmail,
      valueNumber,
      valueDateM,
      valueDateY,
      valueCVC,
    };

    console.log(order);

    axios
      .post("/api/order", order)
      .then(() => console.log("Order Created"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container checkout">
      <h1>Checkout</h1>
      <p>Please enter your information below to order your items</p>
      <div className="row">
        <div className="col s12 m6">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name_test_Test"
                  type="text"
                  className="validate white-text"
                  value={valueFirstName}
                  onChange={(event) => setValueFirstName(event.target.value)}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate white-text"
                  value={valueLastName}
                  onChange={(event) => setValueLastName(event.target.value)}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10">
                <input
                  id="address"
                  type="text"
                  className="validate white-text"
                  value={valueAddress}
                  onChange={(event) => setValueAddress(event.target.value)}
                />
                <label htmlFor="address">Address</label>
              </div>
              <div className="input-field col s2">
                <input
                  id="zip_code"
                  type="text"
                  className="validate white-text"
                  value={valueZip}
                  onChange={handleChangeZip}
                  minLength="4"
                  maxLength="4"
                />
                <label htmlFor="zip_code">Zip Code</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input
                  id="city"
                  type="text"
                  className="validate white-text"
                  value={valueCity}
                  onChange={(event) => setValueCity(event.target.value)}
                />
                <label htmlFor="city">City</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="country"
                  type="text"
                  className="validate white-text"
                  value={valueCountry}
                  onChange={(event) => setValueCountry(event.target.value)}
                />
                <label htmlFor="country">Country</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate white-text"
                  value={valueEmail}
                  onChange={(event) => setValueEmail(event.target.value)}
                />
                <label htmlFor="email">Email</label>
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
                value={valueNumber}
                onChange={handleChangeNumber}
                inputMode="numeric"
                minLength="16"
                maxLength="16"
              />
              <label htmlFor="cardnumber">Card Number</label>
              <span
                className="helper-text"
                data-error="Insert the card number again"
                data-success="right"
              >
                Insert the card number
              </span>

              <div className="row">
                <div className="input-field col s2">
                  <input
                    className="validate white-text"
                    id="carddate1"
                    type="text"
                    pattern="\d*"
                    inputMode="numeric"
                    placeholder="MM"
                    value={valueDateM}
                    onChange={handleChangeDateM}
                    onBlur={handleOnBlurDateM}
                    maxLength="2"
                  />
                </div>
                <div className="input-field col s1">
                  <p> / </p>
                </div>

                <div className="input-field col s2">
                  <input
                    className="validate white-text"
                    id="carddate2"
                    type="text"
                    pattern="\d*"
                    inputMode="number"
                    placeholder="YY"
                    maxLength="2"
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
                    pattern="\d*"
                    inputMode="number"
                    placeholder="CVC"
                    maxLength="3"
                    value={valueCVC}
                    onChange={handleChangeCVC}
                  />
                </div>
              </div>
            </div>
            <input
              className="validate white-text waves-effect waves-light btn-large"
              id="checkoutSubmit"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div className="col s12 m12">
          <div className="table">
            <div className="layout-inline row th">
              <div className="col col-pro">Product</div>
              <div className="col col-price align-center ">Price</div>
              <div className="col col-qty align-center">QTY</div>
              <div className="col">Total</div>
            </div>
            {customers.map((customer) => {
              return (
                <div className="layout-inline row">
                  <div className="col col-pro layout-inline">
                    <img src="/alg4book.png" alt="Fun" />
                    <p>{customer.bookName}</p>
                  </div>

                  <div className="col col-price col-numeric align-center ">
                    <p>10 kr.</p>
                  </div>

                  <div className="col col-qty layout-inline">
                    <a href="#" className="qty qty-minus">
                      -
                    </a>
                    <input className="coolinput" type="numeric" value="3" />
                    <a href="#" className="qty qty-plus">
                      +
                    </a>
                  </div>
                  <div className="col col-total col-numeric">
                    <p> 30 kr</p>
                  </div>
                </div>
              );
            })}
            <div className="tf">
              <div className="row layout-inline">
                <div className="col">
                  <p>Total</p>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;