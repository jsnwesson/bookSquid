import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/bookclub/Header.jsx";
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
