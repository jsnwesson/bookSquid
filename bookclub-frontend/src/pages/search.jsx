import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Login from "../components/sessions/Login";
import Header from "../components/bookclub/Header.jsx";
import SignOut from "../components/sessions/SignOut";
import Search from "../components/bookclub/Search.jsx";

const useStyles = makeStyles((theme) => ({
  main: {
    // backgroundColor: '#bcdae4'
    backgroundColor: "#F7F1C3",
  },
}));

function SearchPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
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
      <Search
        isLoggedIn={props.isLoggedIn}
        setIsLoggedIn={props.setIsLoggedIn}
        uidCookie={props.uidCookie}
        setUidCookie={props.setUidCookie}
        removeUidCookie={props.removeUidCookie}
        emailCookie={props.emailCookie}
        setEmailCookie={props.setEmailCookie}
        removeEmailCookie={props.removeEmailCookie}
        searchResults={props.searchResults}
        setSearchResults={props.setSearchResults}
        setBook={props.setBook}
      />
    </div>
  );
}

export default SearchPage;
