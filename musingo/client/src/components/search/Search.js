import "./Search.css";
import React, { Component } from "react";
import { connect } from "react-redux";

import history from "../../history";
import {
  setLoadingReults,
  fetchResults
} from "../../redux/actions/searchActions";

import SearchItem from "./SearchItem";

class Search extends Component {
  componentDidMount() {
    if (!this.props.isSignedIn) {
      return history.push("/");
    }
  }

  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ input: "" });
    this.props.setLoadingReults();
    this.props.fetchResults(this.state.input.trim());
  };

  render() {
    return (
      <div className="Search">
        <form className="Search-form" onSubmit={this.handleSubmit}>
          <input
            className="Search-input"
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
            placeholder="Search songs..."
          />
        </form>
        <div className="Search-list">
          {this.props.searchResults.map(video => {
            return (
              <SearchItem
                playAudio={this.props.playAudio}
                key={video.id.videoId}
                videoId={video.id.videoId}
                title={video.snippet.title}
                thumbnail={video.snippet.thumbnails.default.url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isLoadingSearch: state.search.isLoadingSearch,
    searchResults: state.search.searchResults
  };
};

export default connect(
  mapStateToProps,
  { setLoadingReults, fetchResults }
)(Search);
