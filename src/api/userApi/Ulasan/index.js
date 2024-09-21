import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';

export const getRemarks = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.REMARKS);
    const remarks = response.data.remarks;

    const formattedRemarks = remarks.map((remark) => ({
      ...remark,
      image: 'https://via.placeholder.com/150',
    }));

    return formattedRemarks;
  } catch (error) {
    console.error("Error fetching remarks:", error);
    return [];
  }
};
