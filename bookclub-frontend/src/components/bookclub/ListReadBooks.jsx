// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import { useCookies } from 'react-cookie';
// import { getReadBookList } from '../../services/bookclubServices';

const ListReadBooks = (props) => {
  // const [uidCookie, setUidCookie] = useCookies(['UID']);
  // const [emailCookie, setEmailCookie] = useCookies(['email']);

  return (
    <div>
      <Link to="/add-book">
        <Button>
          Add Book
        </Button>
      </Link>
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