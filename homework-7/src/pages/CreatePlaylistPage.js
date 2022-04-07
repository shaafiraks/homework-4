import React from "react";
import { Redirect } from "react-router-dom";
import CreatePlaylist from "../components/create-playlist";
import HomePage from "./HomePage";

function CreatePlaylistPage({ authorized }) {
  if (!authorized) {
    return <Redirect to="/homepage" component={HomePage} />;
  } else {
    return <Redirect to="/" />;
  }
}

export default CreatePlaylistPage;
