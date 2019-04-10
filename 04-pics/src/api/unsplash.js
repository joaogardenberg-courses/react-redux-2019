import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 76b097dbb83633e5e6e9b35f5eb41f0e86ed6e9cec2914dc7a1a617673190e39'
  }
});