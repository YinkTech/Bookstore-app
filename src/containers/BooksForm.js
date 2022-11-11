import React from "react";
import Select, { components } from "react-select";
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

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {

  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.state.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={handleChange}
          type="text"
        ></input>

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
    );
  }
}

export default BooksForm
