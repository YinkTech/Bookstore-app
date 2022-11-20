import React from "react";
import { BooksList } from "./../containers/BooksList";
import { BooksForm } from "./../containers/BooksForm";

const App = () => {
  return (
      <div className="App">
        <BooksList />
        <div className="separator"></div>
        <BooksForm />
      </div>
  );
};

export default App;
