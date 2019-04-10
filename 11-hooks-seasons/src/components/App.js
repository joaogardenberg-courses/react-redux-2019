import React         from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner       from './Spinner';
import useLocation   from '../resources/useLocation';

const App = () => {
  const { latitude, errorMessage } = useLocation();

  let content;

  if (latitude) {
    content = <SeasonDisplay latitude={ latitude } />;
  } else if (errorMessage) {
    content = <p>{ errorMessage }</p>;
  } else {
    content = <Spinner message="Please allow us to use your location" />;
  }

  return (
    <div className="border red">
      { content }
    </div>
  );
};

export default App;