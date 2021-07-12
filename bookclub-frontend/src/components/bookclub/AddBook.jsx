import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { addToReadBookList } from '../../services/bookclubServices';

const AddBook = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [uidCookie, setUidCookie] = useCookies(['UID']);
  const [emailCookie, setEmailCookie] = useCookies(['email']);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && genre) {
      addToReadBookList(title, author, genre);
    }
    console.log('You must enter an author, title and genre');
  };

  return (
    <div>
      <Link to="/">
        <Button>
          Home Page
        </Button>
      </Link>
      <h2>Add a book you have read</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={({ target }) => setTitle(target.value)}
        /><br />
        <input
          type="text"
          placeholder="Author"
          onChange={({ target }) => setAuthor(target.value)}
        /><br />
        <input
          type="text"
          placeholder="Genre"
          onChange={({ target }) => setGenre(target.value)}
        /><br />
        <Button type="submit">
          Submit Book
        </Button>
      </form>
    </div>
  )
};

export default AddBook;