import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import SearchPage from './pages/search'
import Book from './pages/book';
import Landing from './pages/landing';
import Profile from './pages/profile';
import './App.css';
import fire from './fire';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uidCookie, setUidCookie, removeUidCookie] = useCookies(['UID']);
  const [emailCookie, setEmailCookie, removeEmailCookie] = useCookies(['email']);
  const [book, setBook] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  return (

    <div className="App" >
      <h1 style={{ fontSize: '7vh' }}>secrit message</h1>

      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              uidCookie={uidCookie}
              setUidCookie={setUidCookie}
              removeUidCookie={removeUidCookie}
              emailCookie={emailCookie}
              setEmailCookie={setEmailCookie}
              removeEmailCookie={removeEmailCookie}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              setBook={setBook}
            />
          </Route>
          <Route path="/book/:id">
            <Book
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              uidCookie={uidCookie}
              setUidCookie={setUidCookie}
              removeUidCookie={removeUidCookie}
              emailCookie={emailCookie}
              setEmailCookie={setEmailCookie}
              removeEmailCookie={removeEmailCookie}
              setSearchResults={setSearchResults}
              book={book}
            />
          </Route>
          <Route path="/profile">
            <Profile
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              uidCookie={uidCookie}
              setUidCookie={setUidCookie}
              removeUidCookie={removeUidCookie}
              emailCookie={emailCookie}
              setEmailCookie={setEmailCookie}
              removeEmailCookie={removeEmailCookie}
              setSearchResults={setSearchResults}
              setBook={setBook}
            />
          </Route>
          <Route path="/">
            <Landing
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              uidCookie={uidCookie}
              setUidCookie={setUidCookie}
              removeUidCookie={removeUidCookie}
              emailCookie={emailCookie}
              setEmailCookie={setEmailCookie}
              removeEmailCookie={removeEmailCookie}
              setSearchResults={setSearchResults}
              setBook={setBook}
            />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
