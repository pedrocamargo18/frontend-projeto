import create from 'zustand';
import axios from 'axios';
import { api_key } from '../apikey';


const KEY_API = api_key
const TMDB_BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const TMDB_MOST_RATED_BASE_URL = 'https://api.themoviedb.org/3/movie/now_playing'; // filmes bem avaliados

console.log(KEY_API)

// Criando o store com Zustand
const useMovieStore = create((set) => ({
  movies: [],
  loading: false,
  error: null,

  fetchTopRatedMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(TMDB_MOST_RATED_BASE_URL, {
        params: {
          api_key: KEY_API,
          language: 'pt-BR', 
          page: 1,
        },
      });
      set({ movies: response.data.results, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch top rated movies', loading: false });
    }
  },


  fetchMovies:  async (query) => {
    if (!query) {
      set({ movies: [] }); 
      return;
    }
    set({ loading: true, error: null });
    try {
      const response = await axios.get(TMDB_BASE_URL, {
        params: {
          api_key: KEY_API,
          query,
        },
      });
      set({ movies: response.data.results, loading: false });
    } catch (error) {
      set({ error: 'Falha ao encontrar o filme.', loading: false });
    }
  },

}));

export default useMovieStore;
