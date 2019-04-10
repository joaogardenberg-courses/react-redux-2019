import React from 'react';
import { connect } from 'react-redux';

import StreamForm       from './StreamForm';
import { createStream } from '../../actions';

class StreamNew extends React.Component {
  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={ this.onSubmit } />
      </div>
    );
  }

  onSubmit = (values) => {
    this.props.createStream(values);
  };
}

StreamNew = connect(
  null,
  { createStream }
)(StreamNew);

export default StreamNew;