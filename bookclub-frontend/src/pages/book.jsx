import React from 'react';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Login from '../components/sessions/Login';
// import SignOut from '../components/sessions/SignOut';
import Header from '../components/bookclub/Header.jsx';
import BookInfo from '../components/bookclub/BookInfo';
// import ReviewButtons from '../components/review/ReviewButtons';
import Review from '../components/review/Review.jsx';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router';


const Book = (props) => {
  const useStyles = makeStyles((theme) => ({
    content: {
      display: 'flex',
      justifyContent: 'center',
    },
    paper: {
      maxWidth: '75%',
    },
    reviews: {
      display: 'flex',
      justifyContent: 'center',
    },
  }));
  const classes = useStyles();
  const { id } = useParams()


  return (
    <div >
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
      <Grid container item direction='column' className={classes.content}>
        <Grid item direction='row'>

          <BookInfo book={props.book} className={classes.info} />

        </Grid>
        <Grid item direction='row' className={classes.reviews}>
          <Review id={id} isLoggedIn={props.isLoggedIn}/>
        </Grid>
      </Grid>
    </div>
  )
}
export default Book;