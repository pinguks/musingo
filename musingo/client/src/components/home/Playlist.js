import React from "react";
import { connect } from "react-redux";
import history from "../../history";

function Playlist(props) {
  if (!props.isSignedIn) {
    history.push("/");
  }

  const { id } = props.match.params;

  const playlist = props.playlists.find(playlist => playlist._id === id);

  const { songs, title } = playlist;

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {songs.map(song => (
          <li key={song._id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    playlists: state.home.playlists
  };
};

export default connect(
  mapStateToProps,
  null
)(Playlist);
