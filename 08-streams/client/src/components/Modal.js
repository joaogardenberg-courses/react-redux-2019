import React    from 'react';
import ReactDOM from 'react-dom';

const Modal = ({
  title, actions, onDismiss,
  children
}) => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={ onDismiss }
    >
      <div
        className="ui standard modal visible active"
        onClick={ (e) => e.stopPropagation() }
      >
        <div className="header">
          { title }
        </div>
        <div className="content">
          { children }
        </div>
        <div className="actions">
          { actions }
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;