import React       from 'react';
import { connect } from 'react-redux';
import { Link }    from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamIndex extends React.Component {
  render() {
    return (
      <div>
        <div style={{ position: 'relative' }}>
          { this.renderCreate() }
          <h2>Streams</h2>
        </div>
        <div className="ui celled list">
          { this.renderList() }
        </div>
      </div>
    );
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div
          className="item"
          key={ stream.id }
        >
          { this.renderButtons(stream) }
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link
              to={`/streams/${stream.id}`}
              className="header"
            >
              { stream.title }
            </Link>
            <div className="description">{ stream.description }</div>
          </div>
        </div>
      );
    });
  }

  renderButtons({ id, userId }) {
    if (userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={ `/streams/${id}/edit` }
            className="ui button primary"
          >
            Edit
          </Link>
          <Link
            to={ `/streams/${id}/delete` }
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ position: 'absolute', right: 0 }}>
          <Link to="/streams/new" className="ui button primary">
            Create stream
          </Link>
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.fetchStreams();
  }
}

const mapStateToProps = ({ streams, auth: { isSignedIn, userId } }) => {
  return {
    isSignedIn,
    streams: Object.values(streams),
    currentUserId: userId
  };
};

StreamIndex = connect(
  mapStateToProps,
  { fetchStreams }
)(StreamIndex);

export default StreamIndex;