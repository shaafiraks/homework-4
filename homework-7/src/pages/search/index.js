import { Component } from "react";
import CreatePlaylist from "../../components/create-playlist";

function Search({ toggleFunction, handleSearch }) {
  return (
    <div>
      <input className="w-64 h-9 bg-gray-100 rounded-full " placeholder="Artits, songs, or podcasts " onChange={(e) => toggleFunction(e.target.value)}></input>
      <button
        id="search-btn"
        className="-"
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </button>
      <CreatePlaylist />
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
