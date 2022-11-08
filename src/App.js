import React from 'react'
import {Booksform} from './containers/BooksForm'
import {Bookslist} from './containers/BooksList'

const App = () => {
  return (
    <div className="App">
      <Booksform />
      <Bookslist />
    </div>
  )
}

export default App;
