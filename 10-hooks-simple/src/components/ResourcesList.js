import React from 'react';

import fetch from '../resources/fetch';

const ResourcesList = ({ resource }) => {
  const resources = fetch(resource);

  const resourcesList = resources.map((record) => {
    return <li key={ record.id }>{ record.title }</li>;
  });

  return (
    <ul>
      { resourcesList }
    </ul>
  );
};

export default ResourcesList;