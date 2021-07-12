import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from '../components/sessions/Login';
import SignOut from '../components/sessions/SignOut';

const Book = (props) => {

  return (
    <div>
      {!props.isLoggedIn ? (
        <>
          <Login
            setIsLoggedIn={props.setIsLoggedIn}
            setUidCookie={props.setUidCookie}
            setEmailCookie={props.setEmailCookie}
          />
          <h1>Book page (not logged in)</h1>
          <Link to='/search'>
            <Button>
              Search Page
            </Button>
          </Link>
          <Link to="/">
            <Button>
              Home page
            </Button>
          </Link>
          <h3>this should show book info for client that is not logged in)</h3>
        </>
      ) : (
        <>
          <SignOut
            removeEmailCookie={props.removeEmailCookie}
            removeUidCookie={props.removeUidCookie}
            setIsLoggedIn={props.setIsLoggedIn}
          />
          <h1>This is the Book Page (logged in)</h1>
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
          <Link to="/">
            <Button>
              Home Page
            </Button>
          </Link>
          <h3>Things that should be on the book page should be here for user that is logged in</h3>
          {/* <h2>title: {props.book.title}</h2>
      <h4>author: {props.book.author}</h4>
      <h5>id: {props.book.id}</h5>
      <h5>[description]: asdfasdfasdfasdfasdfasdfasdfasdf asdf asdf asdf asdf asdf sdf bfabasfb eqrrhbsdavf stdfbv dzfbxcgvc svdfbxc gvc vfxbcv avsfdfc vbdfh c</h5> */}
        </>
      )}
    </div>
  )
}
export default Book;