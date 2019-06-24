import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addSong } from "../../redux/actions/playerActions";
import {
  showModalComponent,
  hideModalComponent
} from "../../redux/actions/searchActions";

import { addToPlaylist } from "../../redux/actions/homeActions";

import Modal from "./Modal";

function SearchItem(props) {
  const { title, thumbnail, videoId, addSong } = props;

  const video = { title, thumbnail, videoId };

  async function handleClick() {
    const song = await axios.get(
      `https://downloader.freemake.com/api/videoinfo/${videoId}`,
      {
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01"
        }
      }
    );

    const {
      metaInfo: { title },
      metaInfo: {
        thumbnailUrls: { default: image }
      },
      metaInfo: { duration }
    } = song.data;

    const { url: src } = song.data.qualities[1];

    addSong({ title, image, src, duration });
    props.playAudio();
  }

  return (
    <div className="Search-item" onClick={handleClick}>
      <div className="Search-item-image">
        <img src={thumbnail} alt="YouTube Video" />
      </div>
      <div className="Search-item-title">
        <p>{title}</p>
      </div>
      <div className="Search-item-to-playlist">
        <button onClick={() => props.showModalComponent(video)}>ADD</button>
      </div>
      {props.showModal && (
        <Modal
          playLists={props.playlists}
          action="ADD TO PLAYLIST"
          onDismiss={props.hideModalComponent}
          onSubmit={props.newPlaylist}
          currentSelectedVideo={props.currentSelectedVideo}
          addToPlaylist={props.addToPlaylist}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    playlists: state.home.playlists,
    showModal: state.search.showModal,
    currentSelectedVideo: state.search.currentSelectedVideo
  };
};

export default connect(
  mapStateToProps,
  { addSong, showModalComponent, hideModalComponent, addToPlaylist }
)(SearchItem);
