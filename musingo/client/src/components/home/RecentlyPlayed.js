import React from "react";
import { connect } from "react-redux";

import RecentlyPlayedItem from "./RecentlyPlayedItem";

function RecentlyPlayed(props) {
  const renderContent = () => {
    if (props.recentlyPlayed.length > 0) {
      return props.recentlyPlayed.map((song, index) => {
        return (
          <RecentlyPlayedItem
            key={index}
            title={song.title}
            imgUrl={song.imgUrl}
          />
        );
      });
    } else {
      return (
        <div className="Home-recently-no-content">
          <h4>No recently played songs</h4>
        </div>
      );
    }
  };
  return (
    <div className="Home-recently">
      <div className="Home-recently-text">
        <p>Recently played</p>
      </div>
      <div className="Home-recently-played">{renderContent()}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    playlists: state.home.playlists,
    recentlyPlayed: state.home.recentlyPlayed
  };
};

export default connect(
  mapStateToProps,
  null
)(RecentlyPlayed);
