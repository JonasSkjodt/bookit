import React, { useState } from "react";
import axios from "axios";
import {randomNumberInRange} from "./utilities.js";

const CreateBook = () => {
  const [id, setBookID] = useState("");
  const [bookName, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [isbn, setISBN] = useState("");
  const [condition, setCondition] = useState("");
  //const [bookImage, setimage] = useState(""); //image
  //const username = localStorage.getItem("authUser");

  const handleInputChange = (e) => {
    document.getElementById("condition").firstChild.disabled = true;
    
      setBookID(randomNumberInRange());
    if (e.target.name === "bookName") {
      setBookTitle(e.target.value);
    } else if (e.target.name === "bookAuthor") {
      setBookAuthor(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
    } else if (e.target.name === "isbn") {
      setISBN(e.target.value);
    } else if (e.target.name === "condition") {
      setCondition(e.target.value);
    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = localStorage.getItem("authUser");

    const book = {
      id,
      bookName,
      bookAuthor,
      //bookImage,
      username,
      price,
      isbn,
      condition,
    };
    console.log(book);

    /*// create a formData object
    const formData = new FormData();
    // append the book object to the formData
    formData.append("book", book);
    // append the uploaded file to the formData
    formData.append("bookImage", bookImage);*/

    axios
      .post("/api/customers", book /*, formData*/)
      .then(() => console.log("Book Created"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="col s12 m12">
      <p>
        Want to sell your books? Fill out this form and we'll display it on
        BookIt.
      </p>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control white-text"
              name="isbn"
              placeholder="ISBN"
              value={isbn}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control white-text"
              name="bookName"
              placeholder="Book Title"
              value={bookName}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control white-text"
              name="bookAuthor"
              placeholder="Book Author"
              value={bookAuthor}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control white-text"
              name="price"
              placeholder="Price"
              value={price}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Condition</label>
                <select className="book_condition" id="condition"
                name="condition"
                onChange={handleInputChange}
                value={condition}
                >
                  <option disabled={false} defaultValue value>Please select a condition</option>
                  <option value="New">New</option>
                  <option value="lightlyUsed">Lightly Used</option>
                  <option value="Used">Used</option>
                  <option value="battleScarred">Battle scarred</option>
                </select>
          </div>
          <br />
          {/*<div className="form-group">
            <input
              type="file"
              className="form-control white-text"
              name="bookImage"
              onChange={handleInputChange}
            />
  </div>*/}
          <br />
          <div className="button-form">
            <button className="btn btn-success" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
/*npm install axios */
