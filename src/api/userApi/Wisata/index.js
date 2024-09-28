import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';

export const getWisata = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.PLACES);
    const places = response.data.places;

    const formattedPlaces = places.map((place) => ({
      id: place.id,
      name: place.name,
      location: place.location,
      description: place.description,
      address: place.address,   
      openingHours: place.openingHours,
      closingHours: place.closingHours,
      entryPrice: place.entryPrice,
      images: [
        place.imageURL1,
        place.imageURL2,
        place.imageURL3,
      ],
      mapURL: place.mapURL,
      rating: place.rating,
      createdAt: place.createdAt,
    }));

    return formattedPlaces;
  } catch (error) {
    console.error("Error fetching places:", error);
    return [];
  }
};
