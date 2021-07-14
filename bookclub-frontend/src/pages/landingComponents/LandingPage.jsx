import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/bookclub/Header.jsx';
import Search from './Search.jsx';
import Carousel from './CarouselContainer.jsx';

const LandingPage = (props) => {

  const [recommendations, setRecommendations] = useState([]);



  useEffect(() => {
    // axios.get('URL') //TODO AXIOS REQUEST//////////////////////////////////////
    // .then((list) => {
    //   setRecommendations(list)
    // })
  })



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
      <Carousel />
    </div>
  )

}

export default LandingPage;