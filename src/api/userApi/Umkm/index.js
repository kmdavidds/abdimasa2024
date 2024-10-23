import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';

export const getUmkm = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.BUSINESSES);
    const businesses = response.data.businesses;

    const formattedBusinesses = businesses.map((business) => ({
      id: business.id,
      name: business.name,
      location: business.location,
      description: business.description,
      address: business.address,
      priceRange: business.priceRange,
      images: [
        business.imageURL1,
        business.imageURL2,
        business.imageURL3,
      ],
      contact: business.contact,
      mapURL: business.mapURL,
      rating: business.rating,
      createdAt: business.createdAt,
    }));

    return formattedBusinesses;
  } catch (error) {
    console.error("Error fetching businesses:", error);
    return [];
  }
};

export const UmkmDetail = async (id)=>{
  try {
    const response = await axios.get(`${API_ENDPOINTS.BUSINESSES}/${id}`)
    return response.data;
  } catch (error) {
    console.error("Error fetching places:", error);
    return {};
  }
}