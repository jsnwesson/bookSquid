import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Header from '../../components/bookclub/Header.jsx';
import LandingSearch from './LandingSearch.jsx';
import Carousel from './Carousel.jsx';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5%'
  }
}))


const LandingPage = (props) => {

  const classes = useStyles();


  return (
    <div className={classes.container}>
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
        searchIsTrue={true}
      />
      <LandingSearch
        setSearchResults={props.setSearchResults}
      />
      <Carousel
        setBook={props.setBook}
      />
    </div>
  )

}

export default LandingPage;