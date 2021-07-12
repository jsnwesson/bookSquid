import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Search from './Search.jsx';
// import Carousel from '/Carousel.jsx';

const LandingPage = (props) => {

  const [recommendations, setRecommendations] = useState([]);



  useEffect(() => {
    // axios.get('URL') //TODO AXIOS REQUEST//////////////////////////////////////
    // .then((list) => {
    //   setRecommendations(list)
    // })
  })



  return(
    <div>
      <Header />
      <Search />
      {/* <Carousel /> */}
    </div>
  )

}

export default LandingPage;