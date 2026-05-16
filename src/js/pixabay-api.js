import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55892968-2783f46f7c6177191ee022395';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}