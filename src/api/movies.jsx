import axios from 'axios';

const API_KEY = '44c6478427b49da22f0b12803a319e47';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;

export default class FetchMovies {
  constructor() {
    this.page = 1;
    this.query = '';
  }

  async getTrending() {
    const params = `trending/all/day?api_key=${API_KEY}`;
    const { data } = await axios.get(params);

    return data.results;
  }

  // /search/search-movies

  async searchMovies(query) {
    const params = `search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&include_adult=false&query=${query}`;
    const { data } = await axios.get(params);
    return data.results;
  }

  // /movies/get-movie-details

  async getMovieDetails(movieId) {
    const params = `movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    const { data } = await axios.get(params);
    return data;
  }

  //   /movies/get-movie-credits
  async getMovieCredits(movieId) {
    const params = `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    const { data } = await axios.get(params);
    return data;
  }

  // /movies/get-movie-reviews
  async getMovieReviews(movieId) {
    const params = `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
    const { data } = await axios.get(params);
    return data;
  }
}
