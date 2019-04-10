import {
  useState,
  useEffect
} from 'react';

export default () => {
  const [latitude, setLatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      ({coords: {latitude}}) => setLatitude(latitude),
      ({message}) => setErrorMessage(message)
    );
  }, []);

  return {
    latitude,
    errorMessage
  };
};