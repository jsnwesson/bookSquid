import React from 'react';
// import { addToReadBookList } from '../../services/bookclubServices';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import IconButton from '@material-ui/core/IconButton';

const AddBook = (props) => {


  /*
  if props.add === false then delete
  if props.add === true then add
  bookID
  name of list
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (title && author && genre) {
    //   addToReadBookList(title, author, genre);
    // }
    console.log('You must enter an author, title and genre');
  };

  return (
    <div>
      <IconButton aria-label="add or delete button" onClick={() => {
        handleSubmit()
      }}>

        <LibraryBooksIcon type="submit" />
      </IconButton>

    </div>
  )
};

export default AddBook;