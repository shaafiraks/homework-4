import { Component } from "react";

function Search({ toggleFunction, handleSearch }) {
  return (
    <div>
      <form>
        <input placeholder="Search Here" onChange={(e) => toggleFunction(e.target.value)}></input>
        <button
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
// class Search extends Component {
//   constructor(props) {
//     super(props);

//     this.toggleFunction = props.toggleFunction;
//     this.handleSearch = props.handleSearch;
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <input placeholder="Search Here" onChange={(e) => this.toggleFunction(e.target.value)}></input>
//           <button
//             onClick={() => {
//               this.handleSearch();
//             }}
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

export default Search;
