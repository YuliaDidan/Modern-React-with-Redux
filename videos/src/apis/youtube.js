import axios from 'axios';

const KEY = 'AIzaSyA2GvJEM9D2iQk3AAPnoFz8dMW72j-5QwA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});