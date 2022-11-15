import { React } from "react";
import Book from "./../components/Book";
import { useSelector } from "react-redux";

export const BooksList = () => {
  const books = useSelector((state) => state.bookReducer);

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
          <Book key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
};
