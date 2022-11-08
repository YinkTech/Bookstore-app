import React from 'react'
import { PropTypes } from 'Prop-Types';

const Book = ({book}) => {
  return (
    <div>{book}</div>
  )
}

book.PropTypes = {
    book: PropTypes.string.isRequired,
}
export default Book;