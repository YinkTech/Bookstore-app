import React from "react";

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
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input id="title" type="category"></input>

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
    </div>
  );
};
