import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={ () => this.context.onLanguageChange('en', 'blue') }
        />
        <i
          className="flag br"
          onClick={ () => this.context.onLanguageChange('pt-BR', 'red') }
        />
      </div>
    );
  }
}

LanguageSelector.contextType = LanguageContext;

export default LanguageSelector;