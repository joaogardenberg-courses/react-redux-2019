import React       from 'react';
import { connect } from 'react-redux';
import _           from 'lodash';

import StreamForm from './StreamForm';

import {
  fetchStream,
  updateStream
} from '../../actions';

class StreamEdit extends React.Component {
  render() {
    const { stream } = this.props;

    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit stream { stream.title }</h3>
        <StreamForm
          onSubmit={ this.onSubmit }
          initialValues={ _.pick(stream, 'title', 'description') }
        />
      </div>
    );
  }

  componentDidMount() {
    const { fetchStream, match: { params: { id } } } = this.props;

    fetchStream(id);
  }

  onSubmit = (values) => {
    const { match: { params: { id } } } = this.props;
    this.props.updateStream(id, values);
  };
}

const mapStateToProps = ({ streams }, { match: { params: { id } } }) => {
  return { stream: streams[id] };
};

StreamEdit = connect(
  mapStateToProps,
  { fetchStream, updateStream }
)(StreamEdit);

export default StreamEdit;