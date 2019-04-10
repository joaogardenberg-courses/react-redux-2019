import axios from 'axios';

const KEY = 'AIzaSyBTUGTgJNIra8iVidt3lVSIF1GtlTRvweg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});