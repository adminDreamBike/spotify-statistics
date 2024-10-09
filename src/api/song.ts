import axios from "axios";
import { headers } from "./config";

export const getRecentlyPlayed = async () => {
  try {
    const response = await axios(
      "https://api.spotify.com/v1/me/player/recently-played",
      headers
    );
    if (response.status === 200) return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRecommendations = async () => {
  try {
    const response = await axios("https://api.spotify.com/v1/recommendations", {
      ...headers,
      params: {
        seed_genres: "pop, rock, reggaeton, reggae, country",
      },
    });
    if (response.status === 200) return response.data;
  } catch (error) {
    throw error;
  }
};
