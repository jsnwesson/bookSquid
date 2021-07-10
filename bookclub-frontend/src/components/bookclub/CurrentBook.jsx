import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {
  // console.log('this is props', props)

  return (
    <div>
      <h2>title: {props.book.title}</h2>
      <h4>author: {props.book.author}</h4>
      <h5>id: {props.book.id}</h5>
      <h5>[description]: asdfasdfasdfasdfasdfasdfasdfasdf asdf asdf asdf asdf asdf sdf bfabasfb eqrrhbsdavf stdfbv dzfbxcgvc svdfbxc gvc vfxbcv avsfdfc vbdfh c</h5>
      <Link to='/'>Home</Link>
    </div>
  )
}
export default Book;