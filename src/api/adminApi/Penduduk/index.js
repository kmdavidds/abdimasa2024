import axios from 'axios';
import API_ENDPOINTS from "../../apiConfig"


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

export const fetchDetails = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.DETAILS);
        return response.data.detail;
    } catch (error) {
        console.error('Error fetching details:', error);
        throw error;
    }
};

export const createDetail = async (slug, value) => {
    try {
        const response = await axios.post(API_ENDPOINTS.DETAILS, { slug, value }, {
            headers: getAuthHeaders(), // Menambahkan header otorisasi
        });
        return response.data;
    } catch (error) {
        console.error('Error creating detail:', error);
        throw error;
    }
};

export const updateDetail = async (id, slug, value) => {
    try {
        const response = await axios.put(API_ENDPOINTS.DETAILS, { id, slug, value }, {
            headers: getAuthHeaders(), // Menambahkan header otorisasi
        });
        return response.data;
    } catch (error) {
        console.error('Error updating detail:', error);
        throw error;
    }
};