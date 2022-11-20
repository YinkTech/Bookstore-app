import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../actions';

const Categories = [
  { category: "Category" },
  { category: "Action" },
  { category: "Biography" },
  { category: "History" },
  { category: "Horror" },
  { category: "Kids" },
  { category: "Learning" },
  { category: "Sci-Fi" },
];

export const BooksForm = () => {

  const dispatch = useDispatch();
  
  const [title, titleInput] = useState('');
  const [category, categoryInput] = useState('');
  const handleChange = (e) => titleInput((e.target.value));
  const handleChangeCategory = (e) => categoryInput((e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      category,
      complete: false,
    };
    dispatch(createBook(book));
    titleInput('');
    categoryInput('');
  };

  return (
      <form onSubmit={handleSubmit}>
        <h2 className='form-lead'>ADD NEW MOVIE</h2>
         <div className='form-sort'>

        
          <input
            id="title"
            type="text"
            className='input-title'
            placeholder='Movie Title'
            value={title} onChange={handleChange}
          />

        <select
          name="categories"
          id="categories"
          className='input-cate'
          value={category}
          onChange={handleChangeCategory}
        >
          {Categories.map((option, index) => (
            <option key={index} className='input-cat'>{option.category}</option>
          ))}
        </select>
      <button type="submit" className='submit'>ADD MOVIE</button>

      </div>
    </form>
  );
};
