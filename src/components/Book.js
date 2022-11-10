import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, category }) => (
  <tr>
    <th>{id}</th>
    <th>{title}</th>
    <th>{category}</th>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
