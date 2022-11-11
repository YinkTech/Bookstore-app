import React from "react";
import Select, { components } from "react-select";
import { Component } from "react";

const Categories = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi",
];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={handleChange} type="text"></input>

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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default BooksForm
