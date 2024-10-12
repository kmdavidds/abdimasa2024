import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';    

export const createSaran = async (data) => {
    const formData = new FormData();
  formData.append('name', data.name);
  formData.append('description', data.description);

  if (data.attachment) {
    formData.append('attachment1', data.attachment1);
  }

  try {
    const response = await axios.post(API_ENDPOINTS.SUGGESTIONS, {
        headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        return response.data;
    } catch (error) {
      console.error('Error posting suggestion:', error);
      throw error;
    }
  };