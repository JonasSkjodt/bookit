import './books.css';
import React, { useEffect, useState } from 'react'; 

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/api/create")
        .then(res => res.json())
        .then(books => setBooks(books));
  }, [])

  return (
      <div>
          <h2 className='profile-user-books'>Your recently made books</h2>
          <ul>
              {books.map((book) => {
                  return <li key={book.BookID}><h4>{book.Title}</h4> <p>Author: {book.Author}</p></li>
              })}
          </ul>
      </div>
  );
}

export default Books;