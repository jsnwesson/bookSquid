import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LoginMoreReviews from '../sessions/LoginMoreReviews.jsx';
import LoginAddReview from '../sessions/LoginAddReview.jsx';
import AddReviewBtn from './AddReviewBtn.jsx'


// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Rating from '@material-ui/lab/Rating';
// import axios from 'axios';
// import access from '../../../../config.js';

//ratings
const labels = {
  1: 'Poor+',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Great',
};

//rating styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '150ch',
    },
  },
  summary: {
    paddingTop: '30px',
  },
  body: {
    paddingTop: '30px',
  },
  recommend: {
    paddingTop: '30px',
  },
  MoreReviewBtn: {
    padding: '0px 10px 0px 0px'
  }
}));

const ReviewButtons = ({handleMoreReviews, reviewsRenderedNum, reviewSum, id, isLoggedIn}) => {
  const classes = useStyles();

  let moreReviews;
  if(reviewsRenderedNum < reviewSum) {
      if(isLoggedIn){
        moreReviews = <span className={classes.MoreReviewBtn}><Button onClick={handleMoreReviews} variant="outlined">MORE REVIEWS</Button></span>;
      } else {
        moreReviews = <span className={classes.MoreReviewBtn}><LoginMoreReviews /> </span>
      }
    } else {
      moreReviews = <span></span>;
  }
  let AddReview;
  if(isLoggedIn){
    AddReview = <AddReviewBtn id={id} /> 
  } else {
    AddReview = <LoginAddReview />
  }



 

  

  return (
  <div>{moreReviews} 
    {AddReview}
  </div>
  )
};

export default ReviewButtons;