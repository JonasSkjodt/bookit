import React, { useState } from "react";
import axios from "axios";

const CreateBook = () => {
  const [bookID, setBookID] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  /*should add images etc*/

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
      .post("/api/create", book)
      .then(() => console.log("Book Created"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="col s12 m8">
      
      <p>Want to sell your books? Fill out this form and we'll display it on BookIt.</p>
      <div className="book-form">
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
