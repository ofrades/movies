import axios from "axios";

export const getMovies = async (query) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
