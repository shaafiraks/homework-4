import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import CreatePlaylist from "./components/create-playlist";

// import CreatePlaylistPage from "./pages/CreatePlaylistPage";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  return (
    <Router>
      <Switch>
        <Route path="/create-playlist">{isLoggedIn ? ( <CreatePlaylist /> ): ( <Redirect exact from="/create-playlist" to="/" />)}</Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
