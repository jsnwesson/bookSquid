import React, { useState, useEffect } from 'react';
import Header from '../components/bookclub/Header.jsx';
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
