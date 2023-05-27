import React, { useState } from "react";
import axios from "axios";

const CreateBook = () => {
  const [id, setBookID] = useState("");
  const [bookName, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  /*should add images etc*/

  const handleInputChange = (e) => {
    if (e.target.name === "id") {
      setBookID(e.target.value);
    } else if (e.target.name === "bookName") {
      setBookTitle(e.target.value);
    } else {
      setBookAuthor(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      id,
      bookName,
      bookAuthor,
    };
    console.log(book);

    axios
      .post("/api/create", book)
      .then(() => console.log("Book Created"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="col s12 m8">
      <p>
        Want to sell your books? Fill out this form and we'll display it on
        BookIt.
      </p>
      <div className="book-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control white-text"
              name="id"
              placeholder="Book ID"
              value={id}
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
