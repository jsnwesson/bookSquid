import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import withSlide from '../../components/bookclub/BookGallery.jsx'
import { favorites, previouslyRead, wantToRead } from '../../dummyData/booklist.jsx';



const Carousel = (props) => {

  const [recommendations, setRecommendations] = useState([]);
  const [latestReviews, setLatestReviews] = useState([]);
  const [latestread, setLatestRead] = useState([]);


  const getRecommendations = () => {

  }

  const getLatestReviews = () => {

  }

  const getLatestRead = () => {

  }



  let prevRead;
  let faves;
  let toRead;
  const faveList = {
    title: 'Recently Reviewed',
    className: 'fave',
    list: favorites, // <-- name of array of book objects
  };
  const prevList = {
    title: 'Recommended',
    className: 'prevRead',
    list: previouslyRead,
  }
  const toReadList = {
    title: 'Latest Read',
    className: 'toRead',
    list: wantToRead,
  }


  return (
    <Container fluid='sm' >
      {withSlide(faves, faveList, props.setBook)}
      {withSlide(prevRead, prevList, props.setBook)}
      {withSlide(toRead, toReadList, props.setBook)}
    </Container>
  )

}

export default Carousel;