import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  render() {
    const label = this.context.language === 'en' ? 'Name' : 'Nome';

    return (
      <div className="ui field">
        <label>{ label }</label>
        <input/>
      </div>
    );
  }
}

Field.contextType = LanguageContext;

export default Field;