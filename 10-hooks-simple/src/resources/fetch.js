import axios from 'axios';

import {
  useState,
  useEffect
} from 'react';

export default (resource) => {
  const [ resources, setResources ] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      setResources(data);
    })();
  }, [resource]);

  return resources;
};