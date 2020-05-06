import React from 'react';
import Navbar from './componetns/Navbar';
import BookList from './componetns/BookList';
import ThemeContextProvider from './componetns/context/ThemeContext';
import BookContextprovider from './componetns/context/BookContext';
import ToggleTheme from './componetns/ToggleTheme';
import AuthContextProvider from './componetns/context/AuthContext';
import './App.css';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextprovider>
            <BookList />
          </BookContextprovider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
