import React from 'react';

import fetch from '../resources/fetch';

const UsersList = () => {
  const users = fetch('users');

  const usersList = users.map((user) => {
    return <li key={ user.id }>{ user.name }</li>;
  });

  return (
    <ul>
      { usersList }
    </ul>
  );
};

export default UsersList;