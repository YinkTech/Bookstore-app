import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../actions';

const Categories = [
  { category: "Select Category" },
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
  const onCategoryChange = (e) => categoryInput((e.target.value));

  const handleSubmit = (e) => {
    const book = {
      id: uuidv4(),
      title,
      category,
    };
    dispatch(createBook(book));
    e.preventDefault();
    titleInput('');
    categoryInput('');
  };

  return (
      <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title} onChange={handleChange}
          />

          <label>
            Categories
            <select name="categories" id="categories" value={category} onChange={onCategoryChange} >
              {Categories.map((option, index) => (
                <option key={index}>{option.category}</option>
              ))}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
  );
};
