import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Login from '../components/sessions/Login';
import Header from '../components/bookclub/Header.jsx';
import SignOut from '../components/sessions/SignOut';
import Search from '../components/bookclub/Search.jsx'



function SearchPage(props) {



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
      <Search />
    </div>
  );

}

export default SearchPage;
