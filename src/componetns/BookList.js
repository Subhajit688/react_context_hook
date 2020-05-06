import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { AuthContext } from './context/AuthContext';
import { BookContext } from './context/BookContext';
import AddBook from './AddBook';
// export default class BookList extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => {
//           const { isAuthenticate, toggleAuth } = authContext;
//           return (
//             <ThemeContext.Consumer>
//               {(context) => {
//                 const { isLightTheme, light, dark } = context;
//                 const theme = isLightTheme ? light : dark;

//                 return (
//                   <div
//                     className='book-list'
//                     style={{ background: theme.bg, color: theme.syntax }}>
//                     <div onClick={toggleAuth}>
//                       {isAuthenticate ? 'Logged Out' : 'Logged In'}
//                     </div>
//                     <ul>
//                       <li style={{ background: theme.ui }}>Book1</li>
//                       <li style={{ background: theme.ui }}>Book2</li>
//                       <li style={{ background: theme.ui }}>Book3</li>
//                     </ul>
//                   </div>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticate, toggleAuth } = useContext(AuthContext);
  const { books, addBook } = useContext(BookContext);

  const theme = isLightTheme ? light : dark;
  return (
    <div
      className='book-list'
      style={{ background: theme.bg, color: theme.syntax }}>
      <div onClick={toggleAuth}>
        {isAuthenticate ? 'Logged Out' : 'Logged In'}
      </div>
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
      <AddBook addBook={addBook} />
    </div>
  );
};

export default BookList;
