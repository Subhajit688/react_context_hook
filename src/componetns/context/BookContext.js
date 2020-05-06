import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const BookContext = createContext();
const BookContextprovider = (props) => {
  const [books, setBooks] = useState([
    { id: uuidv4(), title: 'book1' },
    { id: uuidv4(), title: 'book2' },
    { id: uuidv4(), title: 'book3' },
  ]);
  const addBook = (title) => {
    setBooks([...books, { id: uuidv4(), title }]);
  };
  return (
    <BookContext.Provider value={{ books, addBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextprovider;
