import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../components/bookclub/Header.jsx';
import User from '../components/bookclub/UserInfo.jsx';
import withSlide from '../components/bookclub/BookGallery.jsx';
import { favorites, previouslyRead, wantToRead } from '../dummyData/booklist.jsx';

const useStyles = makeStyles (() => ({
  root: {
    minWidth: 200,
  },
}));

const Profile = (props) => {
  const classes = useStyles();
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
      <Container maxWidth='sm'>
        <User />
      </Container>
      <Container fixed={true} className={classes.root} maxWidth='lg'>
        {withSlide(faves, faveList, props.setBook)}
        {withSlide(prevRead, prevList, props.setBook)}
        {withSlide(toRead, toReadList, props.setBook)}
      </Container>
    </div>
  )
}
export default Profile