import React from 'react';
import            './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it\'s chilly!',
    iconName: 'snowflake'
  }
};

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }

  return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`massive icon icon-left ${iconName}`} />
      <h1>{ text }</h1>
      <i className={`massive icon icon-right ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;