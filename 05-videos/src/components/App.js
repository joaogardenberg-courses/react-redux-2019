import React       from 'react';
import youtube     from '../api/youtube';
import SearchBar   from './SearchBar';
import VideoDetail from './VideoDetail';
import VideosList  from './VideosList';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div className="ui container">
        <SearchBar onSubmit={ this.onSearchSubmit } />
        <div className="ui grid">
          <div className="ui row">
            <div className="ui eleven wide column">
              <VideoDetail video={ selectedVideo } />
            </div>
            <div className="ui five wide column">
              <VideosList
              videos={ videos }
              onVideoSelect={ this.onVideoSelect }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.onSearchSubmit('');
  }

  onSearchSubmit = (term) => {
    youtube.get('/search', {
      params: { q: term }
    }).then(({ data: { items } }) => {
      this.setState({ videos: items, selectedVideo: items[0] });
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }
}

export default App;