import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';

const getAuthHeaders = () => {
  const token = sessionStorage.getItem('token');
  if (!token) {
    console.error('No token found in sessionStorage');
}
  return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
  };
};

export const getAllNews = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.NEWS);
        return response.data.news;
    } catch (error) {
        console.error('Error fetching all news:', error);
        throw error;
    }
};

export const getNewsById = async (id) => {
  try {
      const response = await axios.get(`${API_ENDPOINTS.NEWS}/${id}`);
      return response.data;
  } catch (error) {
      console.error('Error fetching news by ID:', error);
      throw error;
  }
};

  export const createNews = async (data) => {
    try {
        const response = await axios.post(API_ENDPOINTS.NEWS, data, {
            headers: {
                ...getAuthHeaders(),
                'Content-Type': 'multipart/form-data',
            },
        });
        if (response.status === 204) {
          return undefined;
      }
      return response.data;
    } catch (error) {
      console.error('Error in createNews function:', error);
      throw error; 
  }
};

export const updateNews = async (id, newsData) => {
    try {
        const response = await axios.put(`${API_ENDPOINTS.NEWS}`, {
            id,
            ...newsData,
        }, {
            headers: getAuthHeaders(),
        });
        if (response.status === 204) {
            return true;
        }
        return response.data;
    } catch (error) {
    if (error.response) {
        console.error('Error Response:', error.response.data);
        throw error.response.data; 
    } else {
        console.error('Error updating news:', error.message);
        throw error; 
    }
};
}

export const deleteNews = async (id) => {
  try {
      await axios.delete(`${API_ENDPOINTS.NEWS}/${id}`, {
          headers: getAuthHeaders(),
      });
      return true;
  } catch (error) {
      console.error('Error deleting news:', error);
      throw error;
  }
}