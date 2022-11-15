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
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>category</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
            <Book
            key={book.id}
            book={book}
            deleteBook={() => handleRemoveBook(book)}
          />
        ))}
      </tbody>
    </table>
  );
};
