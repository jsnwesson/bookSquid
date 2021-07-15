import React from 'react';
import Container from 'react-bootstrap/Container'
import withSlide from '../../components/bookclub/BookGallery.jsx'
import { favorites, previouslyRead, wantToRead } from '../../dummyData/booklist.jsx';



const CarouselContainer = (props) => {

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
    list: previouslyRead,
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

export default CarouselContainer;