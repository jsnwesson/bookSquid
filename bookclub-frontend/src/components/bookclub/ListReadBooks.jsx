// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Button } from 'react-bootstrap';
// import { getReadBookList } from '../../services/bookclubServices';

const ListReadBooks = (props) => {

  return (
    <div>
      <Button>
        Add Book
      </Button>
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
              {/* <td>
                this needs to use state instead of a Link from RDR
                <Link onClick={() => { props.setBook(i) }} to={`/book/${i}`}>{book.title}</Link>
              </td> */}
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              {/* Where these books are getting pulled from in the DB, that collection needs to be deleted. So this
                format of rendering book list to page needs to be completely different and rendering for a specific
                user based on the UID cookie or some other way */}
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
};
export default ListReadBooks;