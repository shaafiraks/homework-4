import { Component } from "react";
import "./App.css";
import Search from "./pages/search";

class App extends Component {
  state = {
    access_token: "",
    token_type: "",
    expires_in: "",
    state: "",
    error: "",
  };

  handleAccess = () => {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=a62c7ba9e3b04ed593ed968fbeddcc1d&response_type=token&redirect_uri=http://localhost:3000&scope=playlist-modify-private`;
  };

  handleSearch = async () => {
    await fetch(`https://api.spotify.com/v1/search?q=${this.state.searchQuery.replaceAll(" ", "+")}&type=album&limit=12`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.state.access_token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ searchResult: res.albums.items }));
  };

  componentDidMount() {
    const token =
      window.location.hash &&
      window.location.hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .replace("access_token=", "");
    if (token) {
      this.setState({ access_token: token });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.access_token === "" ? <button onClick={this.handleAccess}>login</button> : <Search handleSearch={this.handleSearch} toggleFunction={(value) => this.setState} />}
        {this.state.searchResult.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.images[1].url} />
              <p>artist:{item.artist[0].name}</p>
              <p>date:{item.release_date}</p>
              <p>title={item.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
