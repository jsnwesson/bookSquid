import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import withSlide from '../../components/bookclub/BookGallery.jsx';
import { getRecentlyReviewed, recommendedBooks } from '../../services/bookclubServices.js'
import { favorites, previouslyRead, wantToRead } from '../../dummyData/booklist.jsx';



const Carousel = (props) => {

  const [recommendations, setRecommendations] = useState([]);
  const [latestReviews, setLatestReviews] = useState([]);
  const [latestread, setLatestRead] = useState([]);



  useEffect(() => {

    getRecentlyReviewed()
      .then((results) => {
        // console.log(results)
        setLatestReviews(results)
        // console.log(results)
      })
      .then(() => {
        recommendedBooks()
          .then((results) => {
            setRecommendations(results)
          })
      })

  }, [])

  useEffect(() => {
    console.log('Reviews: ', latestReviews)
    console.log('recommendations: ', recommendations)
  }, [latestReviews, recommendations])


  // const getRecommendations = () => {


  // }

  // const getLatestReviews = () => {
  //   getRecentlyReviewed()
  //     .then((results) => {
  //       setLatestReviews(results)

  //     })


  // }

  // const getLatestRead = () => {

  // }




  let clubRecs;
  let recentlyRev;
  let recentlyRead;
  const recList = {
    title: 'Recommendations from Book Squid',
    className: 'recSquid',
    list: favorites, // <-- name of array of book objects
    removeBook: false,
  };

  const recRevList = {
    title: 'Recently Reviewed',
    className: 'recentlyRev',
    list: latestReviews,
    removeBook: false,
  }

  const recReadList = {
    title: 'Recently Read',
    className: 'recentlyRead',
    list: wantToRead,
    removeBook: false,
  }


  return (
    <Container fluid='sm' >
      {withSlide(clubRecs, recList, props.setBook)}
      {withSlide(recentlyRev, recRevList, props.setBook)}
      {withSlide(recentlyRead, recReadList, props.setBook)}
    </Container>
  )

}

export default Carousel;