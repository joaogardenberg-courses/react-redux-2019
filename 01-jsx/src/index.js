// Import the React and ReactDOM libraries
import React    from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'Click on me!';
}

// Create a React Component
const App = () => {
  const buttonText = 'Click Me!';

  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'red', color: 'white' }}>{ getButtonText() }</button>
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{ buttonText }</button>
    </div>
  );
};

// Take the React Component and show it on the screen
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
