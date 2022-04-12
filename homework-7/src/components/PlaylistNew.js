import React, { useState, useCallback, useContext } from "react";
import { useSelector } from "react-redux";
import { userID } from "../pages/HomePage";
import Search from "../pages/search";

function PlaylistNew() {
  const [searchResult, setSearchResult] = useState([]);
  const setSearchValue = useSelector((state) => state.search.setSearchValue);
  const [access_token, listID, addID, deleteID] = useContext(userID);

  const handleSearch = useCallback(async () => {
    await fetch(`https://api.spotify.com/v1/search?q=${setSearchValue.replaceAll(" ", "+")}&type=track&limit=12`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setSearchResult(res.tracks.items));
  }, [setSearchValue, access_token]);

  return (
    <div>
      <div>
        <Search handleSearch={handleSearch} />
      </div>
      {searchResult.map((item) => {
        return (
          <div key={item.id} className="justify-between">
            <div className="flex min-h-screen w-full items-center justify-center bg-slate-500" key={item.id}>
              <div className="justify-center text-white">
                <img src={item.album.images[1].url} />
                <p>{item.artists[0].name}</p>
                <p>{item.album.release_date}</p>
                <p>{item.name}</p>
                <button className="bg-primary w-24 rounded-full text-black" onClick={() => (listID.includes(item.id) ? deleteID(item.id) : addID(item.id))}>
                  {listID.includes(item.id) ? "Deselect" : "Select"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlaylistNew;
