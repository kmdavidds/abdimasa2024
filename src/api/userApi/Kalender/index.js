import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';

export const getKalender = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.ACTIVITIES);
    const activities = response.data.activities;

    const formattedActivities = activities.reduce((acc, activity) => {
      acc[activity.date] = {
        title: activity.title,
        image: activity.imageURL,
        date: activity.date,
        time: activity.time,
        location: activity.location,
      };
      return acc;
    }, {});

    return formattedActivities;
  } catch (error) {
    console.error("Error fetching activities:", error);
    return {};
  }
};
