import React from 'react';
import { useCookies } from 'react-cookie';

import dummydata from './dummydata.js'
import { withStyles } from '@material-ui/core';
import ReviewRating from './ReviewRating.jsx';
import ReviewStars from './ReviewStars.jsx';
import ReviewList from './ReviewList.jsx';
import ReviewButtons from './ReviewButtons.jsx';



const useStyles = {
  rrCont: {
    marginTop: '60px',
    marginBottom: '60px',
  },
  rrTitleCont: {},
  rrBoxCont: {
    display: 'grid',
    gridTemplateColumns: '24.8% 60%',
    gridGap: '30px',
  },
  rrBoxL: {},
  rrBoxR: {
    maxWidth: '700px',
  },
  reviewCount: {
    fontWeight: '600',
    paddingLeft: '5px',
    fontSize: '1.1rem',
    opacity: '.8',
    '& select': {
      backgroundColor: 'transparent',
      border: 'none',
      fontWeight: '600',
      textDecoration: 'underline',
      fontSize: '1.1rem',
    },
  },
  rrButtons: {
    paddingTop: '5px',
  }
};



class Review extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      avgRating: dummydata.avgRating,
      five: 75,
      four: 25,
      three: 10,
      two: 5,
      one: 5,
      ReviewSum: 99,
      reviewsRendered: dummydata.results,
      reviewsRenderedNum: 2
   
      
    }

  }


  handleMoreReviews() {
    var count = this.state.reviewsRenderedNum
    this.setState({
      reviewsRendered: this.state.reviewResults.slice(0, count + 2),
      reviewsRenderedNum: this.state.reviewsRenderedNum + 2
    })
  }

  render (props) {
    const { classes } = this.props;


    return (
      <div className={classes.rrCont}>
      <div className={classes.rrTitleCont}>
      <h2>Ratings &#38; Reviews</h2>
      </div>
      <div className={classes.rrBoxCont}>
        <div className={classes.rrBoxL}>
          <ReviewRating avgRating={this.state.avgRating} />
          <ReviewStars five={this.state.five} four={this.state.four} three={this.state.three} two={this.state.two} one={this.state.one} />
        </div>
          {/* begin box right  */}
        <div className={classes.rrBoxR}>
          <div className={classes.reviewCount}><p>{this.state.reviewSum} reviews</p></div>
          {/* {filterTypeLine} */}
          <ReviewList reviewResults={this.state.reviewsRendered} />
          <div className={classes.rrButtons}>
          <ReviewButtons reviewsRenderedNum={this.state.reviewsRenderedNum} reviewSum={this.state.reviewSum} handleMoreReviews={this.handleMoreReviews} id={this.props.productId} />
          </div>
        </div>
        {/* end box right  */}
      </div>
   </div>


   )
  }
};


export default withStyles(useStyles)(Review);