import React from "react";
import CreateSong from "../title";

function HomePage({ url, name }) {
  return (
    <div>
      <CreateSong />
      <img src={url} alt="" />
      <p>{name}</p>
    </div>
  );
}

export default HomePage;
