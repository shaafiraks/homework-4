import React from "react";

const AlbumTitle = (props) => {
  return (
    <div className="album-title">
      <h2>{props.name}</h2>
      <h4 className="artist-name">{props.artist}</h4>
    </div>
  );
};

export default AlbumTitle;
