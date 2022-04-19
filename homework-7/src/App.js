import React from "react";
import Homepage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import PlaylistNew from "./components/PlaylistNew";
import { useSelector } from "react-redux";
import CreatePlaylist from "./components/create-playlist";
import PlaylistNew from "./components/PlaylistNew";
// import CreatePlaylistPage from "./pages/CreatePlaylistPage";

// export default function App() {
//   const isLoggedIn = useSelector((state) => state.account.accessToken);
//   // console.log(isLoggedIn);
//   return (
//     <Router>
//       <Switch>
//         <Route path="/create-playlist">{isLoggedIn ? <CreatePlaylist /> : <Redirect to="/" />}</Route>
//         <Route path="/">{!isLoggedIn ? <Homepage /> : <Redirect to="/create-playlist" />}</Route>
//       </Switch>

//     </Router>
//   );
// }

// export default function App() {
//   const isLoggedIn = useSelector((state) => state.account.accessToken);
//   // console.log(isLoggedIn);
//   return (
//     <Router>
//       <Switch>
//         <Route path="/create-playlist">{isLoggedIn ? <PlaylistNew /> : <Redirect exact from="/create-playlist" to="/" />}</Route>
//         <Route exact path="/">
//           <Homepage />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

export default function App() {
  const isLoggedIn = localStorage.getItem("token");
  console.log(isLoggedIn);
  return (
    <Router>
      <Switch>
        <Route path="/create-playlist">{isLoggedIn ? <PlaylistNew /> : <Redirect exact from="/" to="/create-playlist" />}</Route>
        <Route path="/">{!isLoggedIn ? <Homepage /> : <Redirect to="/create-playlist" />}</Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
