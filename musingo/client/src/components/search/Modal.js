import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  const handleClick = e => {
    props.addToPlaylist(e.target.id, props.currentSelectedVideo);
  };

  return ReactDOM.createPortal(
    <div className="Playlist-modal" onClick={props.onDismiss}>
      <div
        className="Playlist-modal-content"
        onClick={e => e.stopPropagation()}
      >
        <ul>
          {props.playLists.map(playlist => {
            return (
              <li onClick={handleClick} key={playlist._id} id={playlist._id}>
                {playlist.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
