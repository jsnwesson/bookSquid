import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToReadBookList } from '../../services/bookclubServices';

const AddBook = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && genre) {
      addToReadBookList(title, author, genre);
    }
    console.log('You must enter an author, title and genre');
  };

  return (
    <div>
      <Link to="/">Home Page</Link>
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
        <button type="submit">
          Submit Book
        </button>
      </form>
    </div>
  )
};

export default AddBook;