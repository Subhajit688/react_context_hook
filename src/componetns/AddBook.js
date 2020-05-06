import React, { useState } from 'react';

const AddBook = ({ addBook }) => {
  const [book, setAddBook] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book);
    setAddBook('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={book}
        onChange={(e) => setAddBook(e.target.value)}
      />
      <br />
      <button type='submit'>Add new book</button>
    </form>
  );
};

export default AddBook;
