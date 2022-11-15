import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, deleteBook }) => {
return(
  <tr key={book.id}>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="button" onClick={deleteBook}>Remove</button></td>
  </tr>
);
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired
};

export default Book;
