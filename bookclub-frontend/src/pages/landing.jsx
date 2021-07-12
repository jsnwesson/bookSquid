import React, { useState, useEffect } from 'react';
import fire from '../fire';
import Login from '../components/sessions/Login';
import ListReadBooks from '../components/bookclub/ListReadBooks';
import SignOut from '../components/sessions/SignOut';
import { Link } from 'react-router-dom';
import { getReadBookList } from '../services/bookclubServices';
import { Button } from 'react-bootstrap';

const Landing = (props) => {
  const [books, setBooks] = useState();
  const [book, setBook] = useState(0);

  fire.auth().onAuthStateChanged((user) => {
    return user ? props.setIsLoggedIn(true) : props.setIsLoggedIn(false);
  });

  useEffect(() => {
    const fetchBooks = async () => {
      if (props.isLoggedIn) {
        const fetchedBooks = await getReadBookList();
        setBooks(fetchedBooks)
      }
    }
    fetchBooks();
  }, [props.isLoggedIn]);

  return (
    <div className="App">
      {!props.isLoggedIn ? (
        <>
          <Login setIsLoggedIn={props.setIsLoggedIn} setUidCookie={props.setUidCookie} setEmailCookie={props.setEmailCookie} />
          <h1>Home landing page (not logged in)</h1>
          <Link to='/search'>
            <Button>
              Search Page
            </Button>
          </Link>
          <Link to="/book/">
            <Button>
              Book page
            </Button>
          </Link>
          <h3>this should show home landing page for client that is not logged in</h3>
        </>
      ) : (
        <>
          <SignOut
            removeEmailCookie={props.removeEmailCookie}
            removeUidCookie={props.removeUidCookie}
            setIsLoggedIn={props.setIsLoggedIn}
          />
          <h1>Home Page (is logged in)</h1>
          <Link to='/search'>
            <Button>
              Search Page
            </Button>
          </Link>
          <Link to="/profile">
            <Button>
              Profile Page
            </Button>
          </Link>
          <Link to="/book/">
            <Button>
              Book page
            </Button>
          </Link>
          <h3>This is where a user that is logged in sees the relevant info for the main home landing page</h3>
          <div>
            <h1>username(to be replaced later)</h1>
            <h4>[joined], month, day year</h4>
            <h5>[about the user section] they are rich and very particular about the website they use for reading.because they have expensive taste</h5>
          </div>
          {books ? <ListReadBooks books={books} setBook={setBook} /> : null}
        </>
      )}
    </div>
  );
}

export default Landing;
