import React, { useState, useContext } from "react";
import { userID } from "../../pages/HomePage";
import axios from "axios";
import PlaylistNew from "../PlaylistNew";

function CreatePlaylist() {
  const [userIDProfile, access_token, listID] = useContext(userID);
  const [openForm, setOpenForm] = useState(false);
  const [createdPlaylist, setCreatedPlaylist] = useState([]);
  const addItem = async (id) => {
    await axios({
      method: "POST",
      url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data: {
        uris: listID.map((item) => `spotify:track:${item}`),
      },
    });
  };

  const openFormHandler = (e) => {
    e.preventDefault();
    setOpenForm(!openForm);
  };

  const initialFormData = Object.freeze({
    name: "",
    desc: "",
  });

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: `https://api.spotify.com/v1/users/${userIDProfile}/playlists`,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data: {
        name: formData.name,
        description: formData.desc,
        public: false,
        collaborative: false,
      },
    }).then((res) => setCreatedPlaylist((prevState) => [...prevState, res.data]));
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <button className="createPlaylist-btn text-[16px] font-medium text-primary" onClick={openFormHandler}>
          Create Playlist
        </button>
      </form>
      {openForm && (
        <form>
          <div>
            <label className="title-form text-[16px] font-medium text-primary">Title</label>
            <div className="">
              <input name="name" className="bg-neutral-600 w-64 h-8 rounded" type="text" onChange={handleChange} placeholder="Add a title"></input>
            </div>
          </div>

          <div>
            <label className="desc-form text-[16px] font-medium text-primary">Description</label>
            <div className="">
              <input name="desc" className="bg-neutral-600 w-64 h-40 rounded" type="text" onChange={handleChange} placeholder="Add an optional description"></input>
            </div>
          </div>
          <button className="submitPlaylist-btn text-[16px] font-medium text-primary" onClick={handleSubmit} type="submit">
            Create Playlist
          </button>
        </form>
      )}
      <div>{createdPlaylist && createdPlaylist.map((playlist) => <PlaylistNew key={playlist.id} addItem={addItem} playlistName={playlist.name} id={playlist.id} />)}</div>
    </div>
  );
}

export default CreatePlaylist;
