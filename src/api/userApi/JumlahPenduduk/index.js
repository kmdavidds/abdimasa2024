import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig'; 

export const getDetail = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.DETAILS);
    const detail = response.data.detail;

    const formattedDetail = detail.map((item) => ({
      ...item,
      slug: item.slug,
      value: item.value,
    }));

    return formattedDetail;
  } catch (error) {
    console.error("Error fetching detail:", error);
    return [];
  }
};
