import React     from 'react';
import SearchBar from './SearchBar';
import unsplash  from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  render() {
    const { images } = this.state;

    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={ this.onSearchSubmit } />
        <ImageList images={ images } />
      </div>
    );
  }

  onSearchSubmit = (term) => {
    unsplash.get('/search/photos', {
      params: {
        query: term
      }
    }).then(({ data: { results } }) => {
      this.setState({ images: results });
    });
  };
}

export default App;