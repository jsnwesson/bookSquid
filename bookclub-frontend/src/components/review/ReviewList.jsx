import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewList = ({reviewResults}) => {
  
  return (
    <>
    <div>
     {reviewResults.map((item, index) => (
       <ReviewTile 
          key={index}
          rating={item.rating}
          summary={item.title}
          body={item.body}
          date={item.date}
          reviewer_name={item.name}
       />
    ))}
    </div>
    </>
  )
};

export default ReviewList;