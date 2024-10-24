import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';

const getAuthHeaders = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
        console.error('No token found in sessionStorage');
        return{};
    }
    return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
    };
  };

export const getAllSaran = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.SUGGESTIONS);
        return response.data.suggestions;
    } catch (error) {
        console.error('Error fetching all news:', error);
        throw error;
    }
};

export const deleteSaran = async (id) => {
    try {
        const response = await axios.delete(`${API_ENDPOINTS.SUGGESTIONS}/${id}`, {
            headers: getAuthHeaders(),
        });
        console.log('Delete response:', response);
        return true;
    } catch (error) {
        console.error('Error deleting Saran:', error);
        throw error;
    }
}
