import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';

export const fetchNews = async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.NEWS);
      return response.data.news; 
    } catch (error) {
      throw new Error('Failed to fetch news');
    }
  };


  export const fetchNewsById = async (id) => {
    try {
      const response = await axios.get(`${API_ENDPOINTS.NEWS}/${id}`);
      return response.data.news;
      console.log(response.data.news);
    } catch (error) {
      throw new Error('Failed to fetch news by ID');
    }
  };
  