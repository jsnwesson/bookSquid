// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
// import { getReadBookList } from '../../services/bookclubServices';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import CurrentBook from './CurrentBook';


const ListReadBooks = (props) => {
  return (
    <div>
      <Link to="/add-book">Add Book</Link>
      <h2>Books you have already read</h2>
      <table>
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Book Genre</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((book, i) => (
            <tr key={book.id}>
              <td>
                <Link onClick={() => { props.setBook(i) }} to={`/book/${i}`}>{book.title}</Link>
              </td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
};
export default ListReadBooks;