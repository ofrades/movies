import axios from "axios";

export const getMovie = async (query) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie/?query=${query}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
