import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Login from '../components/sessions/Login';
import SignOut from '../components/sessions/SignOut';
import Search from '../components/bookclub/Search.jsx'



function SearchPage(props) {

  return (
    <div>
      {!props.isLoggedIn ? (
        <>
          <Login
            setIsLoggedIn={props.setIsLoggedIn}
            setUidCookie={props.setUidCookie}
            setEmailCookie={props.setEmailCookie}
          />
          <h1>MAKE A SEARCH BAR PLEBS</h1>
          <h1>Book page (not logged in)</h1>
          <Link to='/book/'>
            <Button>
              Book Page
            </Button>
          </Link>
          <Link to="/">
            <Button>
              Home page
            </Button>
          </Link>
          <Search/>
        </>
      ) : (
        <>
          <SignOut
            removeEmailCookie={props.removeEmailCookie}
            removeUidCookie={props.removeUidCookie}
            setIsLoggedIn={props.setIsLoggedIn}
          />
          <h1>MAKE A SEARCH BAR PLEBS</h1>
          <h2>Search Page (logged in)</h2>
          <Search/>
          <Link to='/'>
            <Button>
              Home
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
          <h2>
            search bar results page info here for user that is logged in
          </h2>
        </>
      )}
    </div>
  );

}

export default SearchPage;
