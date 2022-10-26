import React from "react";
import Booksform from "../containers/BooksForm";
import Bookslist from "../containers/BooksList";


function App() {
  return (
    <div className="App">
      <Bookslist />
      <Booksform />
    </div>
  );
}

export default App;
