import React from "react";
import Homepage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import PlaylistNew from "./components/PlaylistNew";
import { useSelector } from "react-redux";
import CreatePlaylist from "./components/create-playlist";
// import CreatePlaylistPage from "./pages/CreatePlaylistPage";

export default function App() {
  const isLoggedIn = useSelector((state) => state.account.accessToken);
  // console.log(isLoggedIn);
  return (
    <Router>
      <Switch>
        <Route path="/create-playlist">{isLoggedIn ? <CreatePlaylist /> : <Redirect to="/" />}</Route>
        <Route path="/">{!isLoggedIn ? <Homepage /> : <Redirect to="/create-playlist" />}</Route>
      </Switch>
      {/* <div>
        <Link to="/Homepage" component={Dashboard}></Link>
      </div>
      <Switch>
        <Route path="/"></Route>
        <Route></Route>
      </Switch> */}
    </Router>
  );
}
