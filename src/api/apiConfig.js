const BASE_URL = 'https://abdimasa-backend.vercel.app:443/api/v1';

const API_ENDPOINTS = {
  BASE_URL,
  LOGIN: `${BASE_URL}/auth/login`,
  ACTIVITIES: `${BASE_URL}/activities`,
  PLACES: `${BASE_URL}/places`,
  BUSINESSES: `${BASE_URL}/businesses`,
  NEWS: `${BASE_URL}/news`,
  REMARKS: `${BASE_URL}/remarks`,
  SUGGESTIONS: `${BASE_URL}/suggestions`,
  DETAILS: `${BASE_URL}/details`,
};

export default API_ENDPOINTS;
