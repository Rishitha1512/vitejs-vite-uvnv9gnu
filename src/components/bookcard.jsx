// cart/BookCard.jsx
import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} className="book-image" />
      <div className="book-info">
        <h3 className="book-title">{book.name}</h3>
        <p className="book-author"><b>Author:</b> {book.author}</p>
        <p className="book-genre"><b>Genre:</b> {book.genre}</p>
      </div>
    </div>
  );
};

export default BookCard;
