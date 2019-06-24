import "./Auth.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  tryRegister,
  errorSignIn,
  redirectUser
} from "../redux/actions/authActions";

import history from "../history";
import Spinner from "./Spinner";

class Auth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "503199537093-cp88sesl43pogso5bkl6rlfagcivrtpa.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.initializeAuth();
        })
        .catch(() => {
          this.props.errorSignIn("Authentication Error...");
        });
    });
  }

  initializeAuth = () => {
    this.auth = window.gapi.auth2.getAuthInstance();
    this.auth.isSignedIn.listen(this.onAuthChange);

    if (!this.auth.isSignedIn.get()) {
      this.props.errorSignIn();
    } else {
      this.successSignIn();
    }
  };

  successSignIn = () => {
    const googleId = this.auth.currentUser.get().getId();
    const name = this.auth.currentUser
      .get()
      .getBasicProfile()
      .getGivenName();

    this.props.tryRegister(name, googleId);

    setTimeout(() => {
      history.push("/home");
      this.props.redirectUser();
    }, 2000);
  };

  authUser = isSignedIn => {
    if (isSignedIn) {
      this.successSignIn();
    } else {
      this.auth.signIn();
    }
  };

  onAuthChange = isSignedIn => {
    this.authUser(isSignedIn);
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  renderAuthResult = () => {
    const { isSignedIn, isLoadingGapi, userName, error } = this.props;

    if (error) {
      return <div>{error}</div>;
    } else if (isLoadingGapi) {
      return <Spinner />;
    } else if (isSignedIn) {
      return (
        <h3 className="Auth-welcome">
          Welcome, <span className="Auth-username">{userName}</span>
        </h3>
      );
    } else {
      return (
        <button className="Auth-btn" onClick={this.onSignInClick}>
          <i className="icon ion-logo-google" />
          <span className="Auth-continue">Continue with Google</span>
        </button>
      );
    }
  };

  render() {
    return (
      <div className="Auth">
        <div className="Auth-heading">
          <h1 className="Auth-logo">MUSINGO</h1>
        </div>
        <div className="Auth-login">{this.renderAuthResult()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoadingGapi: state.auth.isLoadingGapi,
    isSignedIn: state.auth.isSignedIn,
    userName: state.auth.user.name,
    error: state.auth.error
  };
};

export default connect(
  mapStateToProps,
  { tryRegister, errorSignIn, redirectUser }
)(Auth);
