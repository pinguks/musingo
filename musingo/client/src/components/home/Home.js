import "./Home.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHomeData } from "../../redux/actions/homeActions";
import history from "../../history";

import Playlists from "./Playlists";

import Spinner from "../Spinner";

import RecentlyPlayed from "./RecentlyPlayed";

class Home extends Component {
  componentDidMount() {
    if (!this.props.isSignedIn) {
      return history.push("/");
    }

    this.props.fetchHomeData(this.props.googleId);
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div className="Home">
        {isLoading ? (
          <div className="Centered">
            <Spinner />
          </div>
        ) : (
          <>
            <RecentlyPlayed />
            <Playlists />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.home.isLoading,
    isSignedIn: state.auth.isSignedIn,
    googleId: state.auth.user.googleId
  };
};

export default connect(
  mapStateToProps,
  { fetchHomeData }
)(Home);
