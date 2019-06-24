import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { connect } from "react-redux";

import Navbar from "./components/Navbar";

import Auth from "./components/Auth";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Player from "./components/player/Player";
import Playlist from "./components/home/Playlist";

import { pauseSong, playSong } from "./redux/actions/playerActions";

class App extends Component {
  audio = new Audio();

  playAudio = src => {
    if (this.audio.src !== src) {
      this.audio.src = this.props.currentSong.src;
    }

    this.audio.play();
    this.props.playSong();
  };

  pauseAudio = () => {
    this.audio.pause();
    this.props.pauseSong();
  };

  render() {
    const { showNavbar } = this.props;

    return (
      <Router history={history}>
        <div className="App">
          <div className="Content">
            <Switch>
              <Route exact path="/" component={Auth} />
              <Route path="/home" component={Home} />
              <Route path="/playlist/:id" component={Playlist} />
              <Route
                path="/search"
                render={props => (
                  <Search {...props} playAudio={this.playAudio} />
                )}
              />
              <Route
                path="/player"
                render={props => (
                  <Player
                    {...props}
                    playAudio={this.playAudio}
                    pauseAudio={this.pauseAudio}
                  />
                )}
              />
              <Route path="*" component={() => <h1>Not found</h1>} />
            </Switch>
          </div>
          {showNavbar && <Navbar />}
        </div>
      </Router>
    );
  }
}

const mapStateToPros = state => {
  return {
    showNavbar: state.auth.showNavbar,
    isPlaying: state.auth.isPlaying,
    currentSong: state.player.currentSong
  };
};

export default connect(
  mapStateToPros,
  { playSong, pauseSong }
)(App);
