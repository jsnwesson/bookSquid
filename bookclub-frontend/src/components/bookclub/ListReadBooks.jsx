import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getReadBookList } from '../../services/bookclubServices';

const ListReadBooks = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await getReadBookList();
      setBooks(fetchedBooks)
    }
    fetchBooks();
  }, []);

  if (books === undefined) {
    return null;
  }

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
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};
export default ListReadBooks;