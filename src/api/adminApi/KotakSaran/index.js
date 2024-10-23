import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';

export const getAllSaran = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.SUGGESTIONS);
        return response.data.suggestions;
    } catch (error) {
        console.error('Error fetching all news:', error);
        throw error;
    }
};