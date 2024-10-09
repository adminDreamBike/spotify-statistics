import axios from "axios";
import { headers } from "./config";

export const getSeveralArtist = async () => {
  try {
    const response = await axios("https://api.spotify.com/v1/artists", {
      ...headers,
      params: {
        ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,0TnOYISbd1XYRBk9myaseg",
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
