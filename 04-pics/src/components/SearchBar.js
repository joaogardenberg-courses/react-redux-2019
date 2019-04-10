import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    const { term } = this.state;

    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={ this.onFormSubmit }>
          <div className="field">
            <label>Image search</label>
            <input type="text" value={ term } onChange={ this.onInputChange } />
          </div>
        </form>
      </div>
    );
  }

  onInputChange = ({ target: { value } }) => {
    this.setState({ term: value });
  };

  onFormSubmit = (event) => {
    const { onSubmit } = this.props;
    const { term }     = this.state;

    event.preventDefault();

    onSubmit(term);
  };
}

export default SearchBar;