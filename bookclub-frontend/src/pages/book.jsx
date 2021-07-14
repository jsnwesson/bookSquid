import React from 'react';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Login from '../components/sessions/Login';
// import SignOut from '../components/sessions/SignOut';
import Header from '../components/bookclub/Header.jsx';
import BookInfo from '../components/bookclub/BookInfo';
// import ReviewButtons from '../components/review/ReviewButtons';
import Review from '../components/review/Review.jsx';

const Book = (props) => {

  return (
    <div>
      <Header
          isLoggedIn={props.isLoggedIn}
          setIsLoggedIn={props.setIsLoggedIn}
          uidCookie={props.uidCookie}
          setUidCookie={props.setUidCookie}
          removeUidCookie={props.removeUidCookie}
          emailCookie={props.emailCookie}
          setEmailCookie={props.setEmailCookie}
          removeEmailCookie={props.removeEmailCookie}
          setSearchResults={props.setSearchResults}
      />
      <BookInfo book={props.book} />
      <Review />
    </div>
  )
}
export default Book;