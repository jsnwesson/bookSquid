import React from 'react';
import Header from '../../components/bookclub/Header.jsx';
import LandingSearch from './LandingSearch.jsx';
import Carousel from './Carousel.jsx';




const LandingPage = (props) => {




  return (
    <div >
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