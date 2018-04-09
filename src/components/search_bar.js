import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
    <form className="input-group">
      <input />
      <span className="input-group-btn">
        <button className="btn btn-secondary">
          Submit
        </button>
      </span>
    </form>
    );
  }

}

export default SearchBar;
