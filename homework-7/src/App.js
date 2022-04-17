import React from "react";
import Homepage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import PlaylistNew from "./components/PlaylistNew";
import { useSelector } from "react-redux";
import CreatePlaylist from "./components/create-playlist";
import PlaylistNew from "./components/PlaylistNew";
// import CreatePlaylistPage from "./pages/CreatePlaylistPage";

export default function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);

  return (
    <Router>
      <Switch>
        {/* <Route path="/">{!isLoggedIn ? <Homepage /> : <Redirect to="/create-playlist" />}</Route> */}
        <Route exact path="/">
          <Homepage />
          {/* <PlaylistNew /> */}
          <h1>Router 1</h1>
        </Route>
        <Route path="/callback/">
          <PlaylistNew />
          {/* <h1>Router 2</h1> */}
        </Route>
      </Switch>
    </Router>
  );
}
