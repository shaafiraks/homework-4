import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Search from "./pages/search";

function App() {
  const [access_token, setaccessToken] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  const [listID, setlistID] = useState([]);

  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_API_KEY;
  const REDIRECT_URL = `http://localhost:3000/callback/`;
  const RESPONSE_TYPE = "token";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const SCOPE = "playlist-modify-private";
  const SPOTIFY_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

  const addID = (id) => {
    setlistID((prevState) => [...prevState, id]);
  };
  const deleteID = (id) => {
    setlistID((prevState) => prevState.filter((selectedID) => selectedID !== id));
  };

  const handleAccess = () => {
    window.location.href = SPOTIFY_URL;
  };

  const handleSearch = useCallback(async () => {
    await fetch(`https://api.spotify.com/v1/search?q=${searchQuery.replaceAll(" ", "+")}&type=album&limit=12`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setsearchResult(res.albums.items));
  });

  useEffect(() => {
    const token =
      window.location.hash &&
      window.location.hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .replace("access_token=", "");
    if (token) {
      setaccessToken(token);
    }
  }, []);

  return (
    <div className="App">
      {access_token === "" ? <button onClick={handleAccess}>login</button> : <Search handleSearch={handleSearch} toggleFunction={(value) => setsearchQuery(value)} />}
      {searchResult.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.images[1].url} />
            <p>{item.artists[0].name}</p>
            <p>{item.release_date}</p>
            <p>{item.name}</p>
            <button onClick={() => (listID.includes(item.id) ? deleteID(item.id) : addID(item.id))}>{listID.includes(item.id) ? "Deselect" : "Select"}</button>
          </div>
        );
      })}
    </div>
  );
}

// class App extends Component {
//   state = {
//     access_token: "",
//     searchResult: [],
//     searchQuery: "",
//   };

//   handleAccess = () => {
//     window.location.href = `https://accounts.spotify.com/authorize?client_id=a62c7ba9e3b04ed593ed968fbeddcc1d&response_type=token&redirect_uri=http://localhost:3000&scope=playlist-modify-private`;
//   };

//   handleSearch = async () => {
//     await fetch(`https://api.spotify.com/v1/search?q=${this.state.searchQuery.replaceAll(" ", "+")}&type=album&limit=12`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${this.state.access_token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => this.setState({ searchResult: res.albums.items }));
//   };

//   componentDidMount() {
//     const token =
//       window.location.hash &&
//       window.location.hash
//         .substring(1)
//         .split("&")
//         .find((elem) => elem.startsWith("access_token"))
//         .replace("access_token=", "");
//     if (token) {
//       this.setState({ access_token: token });
//     }
//   }

//   render() {
//     console.log(this.state.searchResult);
//     return (
//       <div className="App">
//         {this.state.access_token === "" ? <button onClick={this.handleAccess}>login</button> : <Search handleSearch={this.handleSearch} toggleFunction={(value) => this.setState({ searchQuery: value })} />}
//         {this.state.searchResult.map((item) => {
//           return (
//             <div key={item.id}>
//               <img src={item.images[1].url} />
//               <p>{item.artists[0].name}</p>
//               <p>{item.release_date}</p>
//               <p>{item.name}</p>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

export default App;
