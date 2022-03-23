import React from "react";

const AlbumImage = (props) => {
  return (
    <div className="album-image">
      <img src={props.image}></img>
    </div>
  );
};

export default AlbumImage;
