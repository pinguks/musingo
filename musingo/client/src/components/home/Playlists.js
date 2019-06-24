import React, { Component } from "react";
import { connect } from "react-redux";

import {
  newPlaylist,
  showModalComponent,
  hideModalComponent
} from "../../redux/actions/homeActions";

import PlaylistItem from "./PlaylistItem";

import Modal from "./Modal";

class Playlists extends Component {
  renderHelper = () => {
    if (this.props.playlists.length > 0) {
      return this.props.playlists.map((playlist, index) => {
        return (
          <PlaylistItem key={index} title={playlist.title} id={playlist._id} />
        );
      });
    } else {
      return (
        <div className="Centered">
          <h4>No playlists yet</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="Playlists">
        <div className="Playlist-text">
          <p>Playlists</p>
        </div>
        <div className="Playlist-create">
          <button
            className="Playlist-create-button"
            onClick={this.props.showModalComponent}
          >
            <i className="icon ion-md-add" /> Create a new Playlist
          </button>
          {this.props.showModal && (
            <Modal
              title="ADD NEW PLAYLIST"
              action="ADD PLAYLIST"
              onDismiss={this.props.hideModalComponent}
              onSubmit={this.props.newPlaylist}
            />
          )}
        </div>
        <div className="Playlists-container">{this.renderHelper()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.home.showModal,
    playlists: state.home.playlists
  };
};

export default connect(
  mapStateToProps,
  { newPlaylist, showModalComponent, hideModalComponent }
)(Playlists);
