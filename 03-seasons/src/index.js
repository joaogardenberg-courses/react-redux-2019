import React         from 'react';
import ReactDOM      from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner       from './Spinner';

class App extends React.Component {
  state = {
    latitude: null,
    error: null
  };

  render() {
    return (
      <div className="border red">
        { this.renderContent() }
      </div>
    );
  }

  renderContent() {
    const { error, latitude } = this.state;

    if (latitude) {
      return <SeasonDisplay latitude={ latitude } />;
    }

    if (error) {
      return <p>{ error }</p>;
    }

    return <Spinner message="Please allow us to use your location" />;
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude } }) => this.setState({ latitude }),
      ({ message }) => this.setState({ error: message })
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);