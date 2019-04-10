import React       from 'react';
import { connect } from 'react-redux';
import flv         from 'flv.js';

import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  videoRef = React.createRef();

  render() {
    const { stream } = this.props;

    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <video
          controls
          // src={  }
          style={{ width: '100%' }}
          ref={ this.videoRef }
        />
        <h1>{ stream.title }</h1>
        <h5>{ stream.description }</h5>
      </div>
    );
  }

  componentDidMount() {
    const { fetchStream, match: { params: { id } } } = this.props;

    fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { match: { params: { id } } } = this.props;

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
}

const mapStateToProps = ({ streams }, { match: { params: { id } } }) => {
  return { stream: streams[id] }
};

StreamShow = connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);

export default StreamShow;