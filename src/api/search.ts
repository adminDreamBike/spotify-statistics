import axios from "axios";
import { headers } from "./config";
import { Search } from "./types";

export const search = async ({ q, type }: Search) => {
  try {
    const response = await axios("https://api.spotify.com/v1/search", {
      ...headers,
      params: {
        q: q,
        type: type,
        market: "ES",
        limit: 10,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
