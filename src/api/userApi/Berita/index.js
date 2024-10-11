import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';

const fetchNews = async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.NEWS);
      return response.data.news; // Assuming the response contains { news: [...] }
    } catch (error) {
      throw new Error('Failed to fetch news');
    }
  };

  export default fetchNews;