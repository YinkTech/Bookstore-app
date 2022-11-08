import React from 'react'
import { PropTypes } from 'react';

const Book = ({book}) => {
  return (
    <div>{book}</div>
  )
}

book.PropTypes = {
    book: PropTypes.string.isRequired,
}
export default Book;