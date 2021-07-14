import React from 'react';
import Container from 'react-bootstrap/Container'
import withSlide from '../../components/bookclub/BookGallery.jsx'
import { favorites, previouslyRead, wantToRead } from '../../dummyData/booklist.jsx';



const CarouselContainer = (props) => {

  let prevRead;
  let faves;
  let toRead;
  const faveList = {
    title: 'Favorites',
    className: 'fave',
    list: favorites, // <-- name of array of book objects
  };
  const prevList = {
    title: 'Previously Read',
    className: 'prevRead',
    list: previouslyRead,
  }
  const toReadList = {
    title: 'Want to Read',
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

export default CarouselContainer;