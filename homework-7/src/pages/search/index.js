import { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.toggleFunction = props.toggleFunction;
    this.handleSearch = props.handleSearch;
  }

  render() {
    return (
      <div>
        <form>
          <input value={this.state.searchQuery} placeholder="Search Here" onChange={(e) => this.toggleFunction(e.target.value)}></input>
          <button onSubmit={(event) => this.handleSearch(event)}>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
