import React       from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  render() {
    return (
      <div>
        { this.renderAuthButton() }
      </div>
    );
  }

  renderAuthButton() {
    switch(this.props.isSignedIn) {
      case true:
        return (
          <button
            className="ui red google button"
            onClick={ this.onSignOutClick }
          >
            <i className="google icon" />
            Sign out
          </button>
        );
      case false:
        return (
          <button
            className="ui red google button"
            onClick={ this.onSignInClick }
          >
            <i className="google icon" />
            Sign in with Google
          </button>
        );
      default:
        return null;
    }
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '380357579020-3545smgk5s6pn32dnn8v5a15kqif2ail.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };
}

const mapStateToProps = ({ auth: { isSignedIn } }) => {
  return { isSignedIn };
};

GoogleAuth = connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);

export default GoogleAuth;