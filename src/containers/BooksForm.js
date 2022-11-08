import React from 'react'
import Select from 'react-select';

const Categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

const Booksform = () => {
  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input id="title" type="text"></input>

        <label>
            Categories
          <select htmlFor>
            <option value="Action">Action</option>
            <option value="Biography">Biography</option>
            <option selected value="History">
              History
            </option>
            <option value="Horror">Horror</option>
            <option value="Kids">Kids</option>
            <option value="Learning">Learning</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Booksform;
