import axios from "axios";
import qs from "qs";

export const userLogin = async () => {
  const headers = {
    headers: {
      Authorization: "q",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: "eafeb266060e4722b675161d732ef7c0",
      password: "889ed33443eb49c8867d11ca4bcf40ce",
    },
  };

  const data = {
    grant_type: "client_credentials",
  };

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      headers
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
