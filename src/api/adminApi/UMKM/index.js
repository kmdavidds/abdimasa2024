import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';

const getAuthHeaders = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('No token found in sessionStorage');
      return {};
    }
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };
  };

export const getAllUMKM = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.BUSINESSES);
        return response.data.businesses;
    } catch (error) {
        console.error('Error fetching places:', error);
        throw error;
    }
};

export const createUMKM = async (newUMKM) => {
    try {
      const response = await axios.post(API_ENDPOINTS.BUSINESSES, newUMKM, {
        headers: getAuthHeaders(),
      });
      
      if (response.status === 204) {
        return undefined; //
      }
      return response.data;
    } catch (error) {
      console.error('Error creating place:', error);
      throw error;
    }
  };

  export const deleteUMKM = async (id) => {
    try {
      await axios.delete(`${API_ENDPOINTS.BUSINESSES}/${id}`, {
        headers: getAuthHeaders(),
      });
      return true;
    } catch (error) {
      console.error('Error deleting place:', error);
      throw error;
    }
  };
  


