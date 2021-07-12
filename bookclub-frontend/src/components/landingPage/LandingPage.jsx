import React from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Carousel from '/Carousel.jsx';

const LandingPage = (props) => {

  return(
    <>
      <Header />
      <Search />
      <Carousel />
    </>
  )

}

export default LandingPage;