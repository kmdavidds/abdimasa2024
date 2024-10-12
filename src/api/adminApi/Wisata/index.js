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

export const getAllPlaces = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.PLACES);
        return response.data.places;
    } catch (error) {
        console.error('Error fetching places:', error);
        throw error;
    }
};

export const createPlace = async (placeData) => {
    try {
      const response = await axios.post(API_ENDPOINTS.PLACES, placeData, {
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

  export const deletePlace = async (id) => {
    try {
      await axios.delete(`${API_ENDPOINTS.PLACES}/${id}`, {
        headers: getAuthHeaders(),
      });
      return true;
    } catch (error) {
      console.error('Error deleting place:', error);
      throw error;
    }
  };
  


