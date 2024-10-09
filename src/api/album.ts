import axios from "axios";
import { headers } from "./config";

export const getNewAlbumReleases = async () => {
  try {
    const response = await axios(
      "https://api.spotify.com/v1/browse/new-releases",
      headers
    );

    if (response.status === 200) return response.data;
  } catch (error) {
    throw error;
  }
};
