import React       from 'react';
import { connect } from 'react-redux';

let SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: { selectedSong.title }
      </p>
      <p>
        Duration: { selectedSong.duration }
      </p>
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return { selectedSong };
};

SongDetail = connect(
  mapStateToProps
)(SongDetail);

export default SongDetail;