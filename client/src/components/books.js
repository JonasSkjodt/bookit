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
          <h2>Books</h2>
          <ul>
              {books.map((book) => {
                  return <li key={book.id}><h4>{book.title}</h4> <p>Author: {book.author}</p></li>
              })}
          </ul>
      </div>
  );
}

export default Books;