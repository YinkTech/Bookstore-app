import { React} from 'react';
import Book from './../components/Book';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeBook } from './../actions/index';

export const BooksList = () => {
  const books = useSelector((state) => state.bookReducer);

  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
      <div className='card-list'>
        {books.map((book) => (
            <Book
            className='section'
            key={book.id}
            book={book}
            deleteBook={() => handleRemoveBook(book)}
          />
        ))}
      </div>
  );
};
