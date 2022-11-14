import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, category }) => (
  <tr>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);

Book.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
};

export default Book;
