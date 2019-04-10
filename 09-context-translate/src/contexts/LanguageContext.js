import React from 'react';

const Context = React.createContext();

export class LanguageStore extends React.Component {
  state = { language: 'en' };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        { this.props.children }
      </Context.Provider>
    );
  }

  onLanguageChange = (language) => {
    this.setState({ language });
  };
}

export default Context;