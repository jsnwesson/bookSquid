import React, { useState, useEffect } from 'react';
import fire from './fire';
import Login from './components/sessions/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ListReadBooks from './components/bookclub/ListReadBooks';
import { useCookies } from 'react-cookie';
import AddBook from './components/bookclub/AddBook';
import CreateNewUser from './components/sessions/CreateNewUser';
import CurrentBook from './components/bookclub/CurrentBook';
import { getReadBookList } from './services/bookclubServices';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [books, setBooks] = useState();
  const [book, setBook] = useState(0);
  const [uidCookie, setUidCookie, removeUidCookie] = useCookies(['UID']);
  const [emailCookie, setEmailCookie, removeEmailCookie] = useCookies(['email']);

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const signOut = () => {
    fire.auth().signOut()
      .then(() => {
        removeEmailCookie('email');
        removeUidCookie('UID');
      })
  };

  useEffect(() => {
    const fetchBooks = async () => {
      if (isLoggedIn) {
        const fetchedBooks = await getReadBookList();
        setBooks(fetchedBooks)
      }
    }
    fetchBooks();
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Router>
        {!isLoggedIn
          ? (
            <>
              <Switch>
                <Route path="/create-user">
                  <CreateNewUser />
                </Route>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </>
          )
          : (
            <>
              <Button onClick={signOut}>
                Sign out
              </Button>
              {isLoggedIn ?
                <div>
                  <h1>username(to be replaced later)</h1>
                  <h4>[joined], month, day year</h4>
                  <h5>[about the user section] they are rich and very particular about the website they use for reading.because they have expensive taste</h5>
                </div> : null
              }
              <Switch>
                <Route path="/add-book">
                  <AddBook />
                </Route>
                <Route path="/book/">
                  {books ? <CurrentBook book={books[book]} /> : null}
                </Route>
                <Route path="/">
                  {books ? <ListReadBooks books={books} setBook={setBook} /> : null}
                </Route>
              </Switch>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
