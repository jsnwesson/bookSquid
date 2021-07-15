import React from 'react';
import LandingPage from './landingComponents/LandingPage.jsx'


const Landing = (props) => {


  return (
    <div>
      <LandingPage
        isLoggedIn={props.isLoggedIn}
        setIsLoggedIn={props.setIsLoggedIn}
        uidCookie={props.uidCookie}
        setUidCookie={props.setUidCookie}
        removeUidCookie={props.removeUidCookie}
        emailCookie={props.emailCookie}
        setEmailCookie={props.setEmailCookie}
        removeEmailCookie={props.removeEmailCookie}
        setSearchResults={props.setSearchResults}
        setBook={props.setBook}
      />
    </div>);
}

export default Landing;
