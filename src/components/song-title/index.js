import React from "react";

const SongTitle = ({ props }) => {
  return (
    <div className="album-title">
      <img className="album-image" src={props.album.images[0].url}></img>
      <h2>{props.name}</h2>
      <h4 className="artist-name">{props.album.artists[0].name}</h4>
    </div>
  );
};

export default SongTitle;
