import axios from 'axios'
import API_ENDPOINTS from '../../apiConfig';
import Swal from 'sweetalert2';

const getAuthHeaders = () => {
  const token = sessionStorage.getItem('token');
  if (!token) {
      console.error('No token found in sessionStorage');
  }
  return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
  };
};

export const createKalenderData = async (formData, token) => {
  try {
    const response = await axios.post(API_ENDPOINTS.ACTIVITIES, formData, {
      headers: getAuthHeaders(),
    });

    if (response.status === 204) {
        Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: 'Kegiatan berhasil ditambahkan.',
            confirmButtonText: 'OK'
        });
    }
} catch (error) {
    Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Terjadi kesalahan saat menambahkan kegiatan.',
        confirmButtonText: 'OK'
    });
    console.error('Error:', error.response ? error.response.data : error);
}
};

export const getAllKalender = async () => {
  try {
      const response = await axios.get(API_ENDPOINTS.ACTIVITIES, {
          headers: getAuthHeaders(),
      });
      return response.data.activities;
  } catch (error) {
      console.error('Error fetching kalender data:', error);
      throw error;
  }
};


export const getKalenderById = async (id) => {
  try {
      const response = await axios.get(`${API_ENDPOINTS.ACTIVITIES}/${id}`, {
          headers: getAuthHeaders(),
      });
      return response.data;
  } catch (error) {
      console.error('Error fetching kalender by ID:', error);
      throw error;
  }
};

// export const updateKalender = async (id, formData) => {
//   try {
//     formData.append('id', id);
//       const response = await axios.put(API_ENDPOINTS.ACTIVITIES, formData, {
//             headers: getAuthHeaders(),
//         });
//         if (response.status === 204) {
//           Swal.fire({
//               icon: 'success',
//               title: 'Berhasil!',
//               text: 'Kegiatan berhasil diperbarui.',
//               confirmButtonText: 'OK',
//           });
//           return true;
//       }
//       return response.data;
//   } catch (error) {
//       Swal.fire({
//           icon: 'error',
//           title: 'Gagal!',
//           text: 'Terjadi kesalahan saat memperbarui kegiatan.',
//           confirmButtonText: 'OK',
//       });
//       console.error('Error updating kalender event:', error);
//       throw error;
//   }
// };

export const deleteKalender = async (id) => {
  try {
      await axios.delete(`${API_ENDPOINTS.ACTIVITIES}/${id}`, {
          headers: getAuthHeaders(),
      });
      Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Kegiatan berhasil dihapus.',
          confirmButtonText: 'OK',
      });
      return true;
  } catch (error) {
      Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text: 'Terjadi kesalahan saat menghapus kegiatan.',
          confirmButtonText: 'OK',
      });
      console.error('Error deleting kalender event:', error);
      throw error;
  }
};