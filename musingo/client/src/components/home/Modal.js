import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(e.target.playlistName.value);
  };

  return ReactDOM.createPortal(
    <div className="Playlist-modal" onClick={props.onDismiss}>
      <div
        className="Playlist-modal-content"
        onClick={e => e.stopPropagation()}
      >
        <h4 className="Playlist-modal-title">{props.title}</h4>
        <form onSubmit={handleSubmit}>
          <input
            name="playlistName"
            className="Playlist-modal-input"
            type="text"
          />
          <button type="submit" className="Playlist-modal-submit">
            {props.action}
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
