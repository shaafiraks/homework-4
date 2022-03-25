import React from "react";
import SelectButton from "../select-button";
import SongTitle from "../song-title";
import Spotify from "../../data/spotify";

const Album = (props) => {
  return (
    <div className="album-item">
      <SongTitle props={Spotify} />
      <SelectButton />
    </div>
  );
};

export default Album;
