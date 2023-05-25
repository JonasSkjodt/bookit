import React, { useState } from "react";
import axios from "axios";

const CreateBook = () => {
  const [bookID, setBookID] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");

  const handleInputChange = (e) => {
    if (e.target.name === "bookID") {
      setBookID(e.target.value);
    } else if (e.target.name === "bookTitle") {
      setBookTitle(e.target.value);
    } else {
      setBookAuthor(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      bookID,
      bookTitle,
      bookAuthor,
    };

    axios
      .post("/create", book)
      .then(() => console.log("Book Created"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="row">
      <br />
      <div className="book-form col s12 m6">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control white-text"
              name="bookID"
              placeholder="Book ID"
              value={bookID}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control white-text"
              name="bookTitle"
              placeholder="Book Title"
              value={bookTitle}
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
          <div>
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
