import React       from 'react';
import { connect } from 'react-redux';

import Modal           from '../Modal';

import {
  fetchStream,
  destroyStream
} from '../../actions';

class StreamDelete extends React.Component {
  render() {
    return (
      <Modal
        title="Delete stream"
        actions={ this.renderActions() }
        onDismiss={ this.onDismiss }
      >
        { this.renderContent() }
      </Modal>
    );
  }

  renderContent = () => {
    const { stream } = this.props;

    if (!stream) {
      return 'Loading...';
    }

    return `Are you sure you want to delete the stream "${stream.title}"?`;
  };

  renderActions = () => {
    return (
      <>
        <button
          className="ui button negative"
          onClick={ this.onDeleteClick }
        >
          Delete
        </button>
        <button
          className="ui button"
          onClick={ this.onDismiss }
        >
          Cancel
        </button>
      </>
    );
  };

  componentDidMount() {
    const { fetchStream, match: { params: { id } } } = this.props;
    fetchStream(id);
  }

  onDismiss = () => {
    console.log(this.props.history);
    this.props.history.goBack();
  };

  onDeleteClick = () => {
    const { destroyStream, match: { params: { id } } } = this.props;
    destroyStream(id);
  };
}

const mapStateToProps = ({ streams }, { match: { params: { id } } }) => {
  return { stream: streams[id] }
};

StreamDelete = connect(
  mapStateToProps,
  { fetchStream, destroyStream }
)(StreamDelete);

export default StreamDelete;