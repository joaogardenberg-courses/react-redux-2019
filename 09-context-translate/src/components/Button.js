import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext    from '../contexts/ColorContext';

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        { this.renderButton }
      </ColorContext.Consumer>
    );
  }

  renderButton = (color) => {
    const className = `ui button ${color}`;

    return (
      <button className={ className }>
        <LanguageContext.Consumer>
          { this.renderSubmit }
        </LanguageContext.Consumer>
      </button>
    );
  };

  renderSubmit({ language }) {
    return language === 'en' ? 'Submit' : 'Enviar';
  }
}

export default Button;