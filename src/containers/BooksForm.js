import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Component } from "react";

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
  return (
    <form>
    <label htmlFor="title">Title</label>
    <input
      id="title"
      type="text"
    />

    <label>
      Categories
      <select name="categories" id="categories">
        {Categories.map((option, index) => (
          <option key={index}>{option.category}</option>
        ))}
      </select>
    </label>
    <button type="submit">Submit</button>
  </form>
  )
}

// default BooksForm;
