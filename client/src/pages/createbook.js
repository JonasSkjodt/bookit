import React, { useState } from "react";
import axios from "axios";

const CreateBook = () => {
  const [id, setBookID] = useState("");
  const [bookName, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookImage, setimage] = useState(""); //image
  const username = localStorage.getItem('authUser');

  const handleInputChange = (e) => {
    if (e.target.name === "id") {
      setBookID(e.target.value);
    } else if (e.target.name === "bookName") {
      setBookTitle(e.target.value);
    } else if (e.target.name === "bookAuthor") {
      setBookAuthor(e.target.value);
    } else {
      setimage(e.target.value); // get the value of the image when the input changes
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = localStorage.getItem('authUser');
    const book = {
      id,
      bookName,
      bookAuthor,
      bookImage, // add the image state here
      username,
    };
    console.log(book);

    // create a formData object 
    const formData = new FormData();
    // append the book object to the formData
    formData.append('book', book);
    // append the uploaded file to the formData
    formData.append('bookImage', bookImage);

    axios
      .post("/api/create", formData)
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
          <div className="form-group">
            <input
              type="file"
              className="form-control white-text"
              name="bookImage"
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
