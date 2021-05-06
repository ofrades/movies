import axios from "axios";

export const getRandomMovies = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
