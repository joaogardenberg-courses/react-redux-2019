import React, { useState } from 'react';

import ResourcesList from './ResourcesList';
import UsersList     from './UsersList';

const App = () => {
  const [ resource, setResource ] = useState('posts');

  return (
    <div>
      <div>
        <UsersList />
        <button
          className="ui button basic"
          onClick={ () => setResource('posts') }
        >
          Posts
        </button>
        <button
          className="ui button basic"
          onClick={ () => setResource('todos') }
        >
          Todos
        </button>
      </div>
      <ResourcesList resource={ resource } />
    </div>
  );
};

export default App;