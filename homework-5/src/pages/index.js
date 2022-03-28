import React from "react";
import { DataLagu } from "../data/data5";
import HomePage from "../components/track-page";

function TrackPage() {
  return (
    <div>
      {DataLagu.map((TrackLagu) => (
        <HomePage key={TrackLagu.album.id} name={TrackLagu.album.name} url={TrackLagu.album.images[1].url} />
      ))}
    </div>
  );
}

export default TrackPage;
