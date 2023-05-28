import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./pruduct.css";
import "./useViewport.js";
import useViewport from "./useViewport.js";
import axios from "axios";

const Product = () => {
  const location = useLocation();
  const book = location.state.book;
  const [customers, setCustomers] = useState([]);
  const { width } = useViewport();
  const breakpoint = 768;
  let count = 0;
  const [loanTime, setLoanTime] = useState("");
  const [loanPrice, setLoanPrice] = useState("");
  //const [bookImage, setimage] = useState(""); //image
  //const username = localStorage.getItem("authUser");

  const handleInputChange = (e) => {
      setLoanTime(e.target.value);
      document.getElementById("LoanTimeDropDown").firstChild.disabled = true;

      if(e.target.value === "7d"){
        setLoanPrice(book.price * 0.1);
      } else if(e.target.value === "14d"){
        setLoanPrice(book.price * 0.2);
      } else if(e.target.value === "30d"){
        setLoanPrice(book.price * 0.3);
      } else if(e.target.value === "3m"){
        setLoanPrice(book.price * 0.6);
      }

  }


  const addToCart = (event) => {
    event.preventDefault();
    console.log("Add " + book.id);
    console.log("Add " + book.bookName);
    console.log("Add " + book.price);

    axios
      .post("/api/cart", {
        id: book.id,
        bookName: book.bookName,
        price: book.price,
      })
      .then(() => alert("Added to cart"))
      .catch((err) => {
        console.log(err);
      });
  };

  const addToCartLoan = (event) => {
    event.preventDefault();
    console.log("Add " + book.id);
    console.log("Add " + book.bookName);
    console.log("Add " + loanPrice);

    axios
      .post("/api/cart", {
        id: book.id,
        bookName: book.bookName,
        price: loanPrice,
      })
      .then(() => alert("Added to cart"))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((customers) => setCustomers(customers));
  });
    return (
      <div className="container m-t">
        <div className="row">
          <div className="col s12 m9">
            <div className="row">
              <div className="col s4">
                <img
                  id="book_img"
                  src="https://source.unsplash.com/random/300×330/?bird"
                  style={{ borderradius: 20 }}
                ></img>
              </div>
              <div className="col s8">
                <h1 className="product-title">{book.bookName}</h1>
                <p>ISBN: {book.isbn}</p>
                {customers.map((customer) => {
                  if (customer.id === book.id) {
                    return (
                      <>
                    <p>Author: {customer.bookAuthor}</p>
                    <p>book condition: {customer.condition}</p>
                    <p>Seller: {customer.username}</p>
                    </>
                    )
                  }
                })}
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="row">
              <div className="add_to_cart_area">
                <h5>Buy this book</h5>
                <ul>
                  {customers.map((customer) => {
                    if (customer.id === book.id) {
                      return (
                        <li id="price_text" className="white-text m-b">Price: {customer.price} kr. </li>
                      );
                    }
                  })}
                  <li>
                    <button
                      id="add_to_cart_button"
                      className="btn waves-effect waves-light"
                      onClick={addToCart}
                    >
                      Buy Book
                    </button>
                  </li>
                  
                </ul>
              </div>
              <div className="add_to_cart_area">
            <h5>Loan this book</h5>
                <ul>
                  {customers.map((customer) => {
                    if (customer.id === book.id) {
                      
                      return (
                        <li id="price_loan_text" className="white-text m-b">Price: {loanPrice} kr. </li>
                      );
                    }
                  })}
                  <li>
                    <form>
                    <select id="LoanTimeDropDown" 
                name="loanTime"
                onChange={handleInputChange}
                value={loanTime}
                >
                  <option disabled={false} defaultValue value>Please select loan time</option>
                  <option value="7d">7 days</option>
                  <option value="14d">14 days</option>
                  <option value="30d">30 days</option>
                  <option value="3m">3 months</option>
                </select>
                    <button
                      id="add_to_cart_button"
                      className="btn waves-effect waves-light m-t"
                      onClick={addToCartLoan}
                      >
                      Loan Book
                    </button>
                      </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="other_books" className="row">
          <div className="col s12 m12">
              <h4 className="center">Other books</h4>
              <div className="row">
                {customers.map((customer) => {
                  if (customer.id != book.id && count < 4) {
                    count++;
                    return (
                      <div key={customer.id} className="col s6 m3 l4">
                        <Link
                          to="/product"
                          state={{
                            book: customer,
                          }}
                        >
                          <div className="card bRad">
                            <div className="card-image waves-effect waves-block waves-light bRadT">
                              <img src="https://source.unsplash.com/random/300×300" />
                            </div>
                            <div className="card-content">
                              <span className="card-title white-text text-darken-4 text-overflow">
                                {customer.bookName}
                                <i className="material-icons right">
                                  more_vert
                                </i>
                              </span>
                          
                            </div>
                            <span className="btn-floating halfway-fab waves-effect waves-light">
                              {customer.price} Kr.</span>
                          </div>
                        </Link>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            </div>
      </div>
    );
  
};

export default Product;
