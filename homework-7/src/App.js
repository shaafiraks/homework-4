import { createContext, useState, useEffect, useCallback } from "react";
import "./App.css";
import Search from "./pages/search";
import axios from "axios";

export const userID = createContext();

function App() {
  const [access_token, setaccessToken] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  const [listID, setlistID] = useState([]);
  const [userProfile, setuserProfile] = useState({});

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

  const handleSearch = async () => {
    await fetch(`https://api.spotify.com/v1/search?q=${searchQuery.replaceAll(" ", "+")}&type=track&limit=12`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setsearchResult(res.tracks.items));
  };

  const handleGetUserProfile = async (token) => {
    await axios({
      method: "GET",
      url: "https://api.spotify.com/v1/me",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setuserProfile(res.data));
  };

  useEffect(() => {
    const token =
      window.location.hash &&
      window.location.hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .replace("access_token=", "");
    if (token) {
      handleGetUserProfile(token);
      setaccessToken(token);
    }
  }, []);

  return (
    <userID.Provider value={[userProfile.id, access_token]}>
      <div className="App ">
        {access_token === "" ? <button onClick={handleAccess}>Login With Spotify</button> : <Search handleSearch={handleSearch} toggleFunction={(value) => setsearchQuery(value)} />}
        {searchResult.map((item) => {
          return (
            <div className="justify-between">
              <div className="flex min-h-screen w-full items-center justify-center bg-slate-500" key={item.id}>
                <div key={item.id} className="justify-center text-white">
                  <img src={item.images[1].url} />
                  <p>{item.artists[0].name}</p>
                  <p>{item.album.release_date}</p>
                  <p>{item.name}</p>
                  <button className="bg-primary w-24 rounded-full text-black" onClick={() => (listID.includes(item.id) ? deleteID(item.id) : addID(item.id))}>
                    {listID.includes(item.id) ? "Deselect" : "Select"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </userID.Provider>
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
