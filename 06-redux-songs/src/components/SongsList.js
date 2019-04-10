import React          from 'react';
import { connect }    from 'react-redux';
import { selectSong } from '../actions'

class SongsList extends React.Component {
  render() {
    return (
      <div className="ui divided list">
        { this.renderList() }
      </div>
    );
  }

  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={ song.title }>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={ () => this.onButtonClick(song) }
            >
              Select
            </button>
          </div>
          <div className="content">{ song.title }</div>
        </div>
      );
    });
  }

  onButtonClick = (song) => {
    this.props.selectSong(song);
  }
}

const mapStateToProps = ({ songs }) => {
  return { songs };
};

SongsList = connect(
  mapStateToProps,
  { selectSong }
)(SongsList);

export default SongsList;