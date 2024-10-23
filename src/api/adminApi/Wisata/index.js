import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';

const getAuthHeaders = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      throw new Error('Authentication required');
  }
  if (isTokenExpired(token)) {
    throw new Error('Token has expired');
}
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };
  };

  const isTokenExpired = (token) => {
    try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        return decoded.exp * 1000 < Date.now();
    } catch {
        return true;
    }
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

export const createPlace = async (formData) => {
    try {
      const token = sessionStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }

        const response = await axios.post(API_ENDPOINTS.PLACES, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
            validateStatus: function (status) {
              return status < 500; 
          }
        });
        if (response.status === 422) {
          console.error('Validation errors:', response.data);
          throw new Error(response.data.message || 'Validasi gagal');
      }

      return response.data;
    } catch (error) {
      if (error.response?.status === 422) {
        console.error('Validation errors:', error.response.data);
        // Throw error dengan pesan yang lebih spesifik
        throw new Error(error.response.data.message || 'Data tidak valid');
    }
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
  


