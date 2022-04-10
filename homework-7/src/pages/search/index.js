import React from "react";
import CreatePlaylist from "../../components/create-playlist";
import { setSearch } from "../../reducers/SearchSlice";
import { useDispatch } from "react-redux";

function Search(handleSearch) {
  const dispatch = useDispatch();
  // const searchQuery = useSelector((state) => state.searchQuery.value);

  return (
    <div>
      <input className="w-64 h-9 bg-gray-100 rounded-full " placeholder="Artits, songs, or podcasts " onChange={(e) => dispatch(setSearch(e.target.value))}></input>
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
