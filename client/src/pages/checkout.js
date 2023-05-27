import React, { useEffect, useState } from "react";
import axios from "axios";
import "./checkout.css";

const Checkout = () => {
  const [valueFirstName, setValueFirstName] = useState("");
  const [valueLastName, setValueLastName] = useState("");
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

  const handleChange = (event) => {
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
      alert("Check if date is insert correctly");
      return false;
    }

    const order = {
      valueFirstName,
      valueLastName,
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

  const handleDelete = (id) => {};

  return (
    <div className="container">
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
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate white-text"
                  value={valueLastName}
                  onChange={(event) => setValueLastName(event.target.value)}
                />
                <label for="last_name">Last Name</label>
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
                value={valueNumber}
                onChange={handleChange}
                inputmode="numeric"
                minLength="16"
                maxLength="16"
              />
              <label for="cardnumber">Card Number</label>
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
                    inputmode="numeric"
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
                    inputmode="number"
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
                    inputmode="number"
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
        <div className="col s12 m6">
          <div className="table">
            <div className="layout-inline row th">
              <div className="col col-pro">Product</div>
              <div className="col col-price align-center ">Price</div>
              <div className="col col-qty align-center">QTY</div>
              <div claclassNamess="col">Total</div>
            </div>
            {customers.map((customer) => {
              return (
                <div className="layout-inline row">
                  <div className="col col-pro layout-inline">
                    <img
                      src="http://static.ddmcdn.com/gif/10-kitten-cuteness-1.jpg"
                      alt="kitten"
                    />
                    <p>{customer.bookName}</p>
                  </div>

                  <div className="col col-price col-numeric align-center ">
                    <p>10 kr.</p>
                  </div>

                  <div className="col col-qty layout-inline">
                    <a href="#" class="qty qty-minus">
                      -
                    </a>
                    <input className="coolinput" type="numeric" value="3" />
                    <a href="#" class="qty qty-plus">
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

<style scoped>

</style>
