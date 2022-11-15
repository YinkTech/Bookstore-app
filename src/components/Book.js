import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { removeBook } from "./../actions/index";

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <tr key={book.id}>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="button" onClick={() => deleteBook(book)}>
          Remove
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
