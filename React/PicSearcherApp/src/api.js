import axios from 'axios';
import { accessKey } from './components/credentials/accessKey';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: term,
    },
  });

  console.log(response.data.results);

  return response.data.results;
};

export default searchImages;
