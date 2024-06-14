import axios from "axios";

const base_url = "https://api.spotify.com/v1";

export const getAllPlaylists = async (access_token) => {
  const headers = {
    Authorization: "Bearer " + access_token,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.get(base_url + "/me/playlists", {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching playlists:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
export const letSearchASong = async (access_token, searchKeyword) => {
  const headers = {
    Authorization: "Bearer " + access_token,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.get(base_url + "/search", {
      headers,
      params: {
        q:searchKeyword,
        type: "track",
        limit: 20,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching playlists:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
