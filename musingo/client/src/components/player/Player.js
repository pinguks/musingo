import "./Player.css";
import React, { Component } from "react";
import { connect } from "react-redux";

import history from "../../history";

class Player extends Component {
  componentDidMount() {
    if (!this.props.isSignedIn) {
      return history.push("/");
    }
  }

  handlePlaying = () => {
    const { isPlaying, currentSong } = this.props;

    if (Object.values(currentSong).length === 0) return;

    if (isPlaying) {
      this.props.pauseAudio();
    } else {
      this.props.playAudio(currentSong.src);
    }
  };

  renderButton = () => {
    const { isPlaying } = this.props;

    if (isPlaying) {
      return <i className="icon ion-md-pause" />;
    } else {
      return <i className="icon ion-md-play" />;
    }
  };

  render() {
    const { title, image } = this.props.currentSong;

    return (
      <div className="Player">
        <div
          className="Player-song-image"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h5 className="Player-song-title">{title}</h5>
        </div>
        <div className="Player-controls">
          <div className="Player-progressbar" />
          <div className="Player-buttons">
            <button className="Player-play" onClick={this.handlePlaying}>
              {this.renderButton()}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong
  };
};

export default connect(
  mapStateToProps,
  null
)(Player);
