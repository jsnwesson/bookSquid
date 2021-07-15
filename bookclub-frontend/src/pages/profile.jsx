import React from 'react';
import { Container } from 'react-bootstrap';
import withSlide from '../components/bookclub/BookGallery.jsx';
import Header from '../components/bookclub/Header.jsx';
import { favorites, previouslyRead, wantToRead } from '../dummyData/booklist.jsx';


const Profile = (props) => {
  let prevRead;
  let faves;
  let toRead;
  const faveList = {
    title: 'Favorites',
    className: 'fave',
    list: favorites, // <-- name of array of book objects
    removeBook: true,
  };
  const prevList = {
    title: 'Previously Read',
    className: 'prevRead',
    list: previouslyRead,
    removeBook: true,
  }
  const toReadList = {
    title: 'Want to Read',
    className: 'toRead',
    list: wantToRead,
    removeBook: true,
  }

  return (
    <div key={props.emailCookie.UID}>
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
      <Container fluid='sm'>
        {withSlide(faves, faveList, props.setBook)}
        {withSlide(prevRead, prevList, props.setBook)}
        {withSlide(toRead, toReadList, props.setBook)}
      </Container>
    </div>
  )
}
export default Profile