import React from "react";

import history from "../../history";

function PlaylistItem(props) {
  const handleRoute = () => {
    history.push(`/playlist/${props.id}`);
  };

  return (
    <div className="Playlist-item" onClick={handleRoute}>
      <div className="Playlist-item-icon">
        <i className="icon ion-md-list" />
      </div>
      <div className="Playlist-item-title">
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default PlaylistItem;
