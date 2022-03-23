import React from "react";
import PlayButton from "./SelectButton";
import AlbumImage from "./AlbumImage";
import AlbumTitle from "./AlbumTitle";

const Album = (props) => {
  return (
    <div className="album-item">
      <AlbumImage image={props.image} />
      <AlbumTitle name={props.name} artist={props.artist} />
      <PlayButton />
    </div>
  );
};

export default Album;
