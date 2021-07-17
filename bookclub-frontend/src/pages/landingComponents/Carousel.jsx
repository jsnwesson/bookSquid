import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container'
import withSlide from '../../components/bookclub/BookGallery.jsx'
import { getRecentlyReviewed, recommendedBooks } from '../../services/bookclubServices.js';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    heightMin: '100vh',
    padding: '20px',
    // border: '1px solid red',
    // backgroundColor: '#d8dfeb', //'#dde9eb',
    // boxShadow: '0 0 15px -7px gray'
  }
}))



const Carousel = (props) => {
  const [recommendations, setRecommendations] = useState([]);
  const [recReviewed, setRecReviewed] = useState([]);
  // const [latestread, setLatestRead] = useState([]);
  const classes = useStyles()

  useEffect(() => {
    return recommendedBooks()
      .then((results) => {
        setRecommendations(results)
      })
  }, [])

  useEffect(() => {
    return getRecentlyReviewed()
      .then((results) => {
        setRecReviewed(results)
      })
  }, [])

  let clubRecs;
  let recentlyRev;
  // let recentlyRead;

  const recList = {
    title: 'Recommendations from Book Squid',
    className: 'recSquid',
    list: recommendations, // <-- name of array of book objects
    removeBook: false,
  };

  const recRevList = {
    title: 'Recently Reviewed',
    className: 'recentlyRev',
    list: recReviewed,
    removeBook: false,
  }

  // const recReadList = {
  //   title: 'Recently Read',
  //   className: 'recentlyRead',
  //   list: wantToRead,
  //   removeBook: false,
  // }


  return (
    <Container fluid='md' className={classes.mainContainer}>
      {withSlide(clubRecs, recList, props.setBook)}
      {withSlide(recentlyRev, recRevList, props.setBook)}
      {/* {withSlide(recentlyRead, recReadList, props.setBook)} */}
    </Container>
  )

}

export default Carousel;