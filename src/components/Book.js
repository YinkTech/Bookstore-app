import React from 'react';
import PropTypes from 'prop-types';
import './styles/progress.css'
import { Progress } from './Progress';
import { Session } from './Session';

const Book = ({ book, deleteBook, className }) => {
return(
  <div key={book.id}  className={className} >
    <div className='list-sec'>
      <p className='bookcategory'>{book.category}</p>
      <p className='booktitle'>{book.title}</p>
      <ul className='comm-list'>
        <li>Comments</li>

        <li onClick={deleteBook}>Remove</li>
        <li> Edit </li>

        </ul>
    </div>
    <Progress />
    <Session />

  </div>
  
);
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
  deleteBook: PropTypes.func.isRequired
};

export default Book;
