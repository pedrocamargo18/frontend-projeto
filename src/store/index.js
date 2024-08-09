import create from 'zustand';
import axios from 'axios';

// Criando o store com Zustand
const useMovieStore = create((set) => ({
  movies: [],
  loading: false,
  error: null,

  fetchMovies: async (searchTerm) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=2a020611`);
      set({ movies: response.data.Search || [], loading: false });
    } catch (error) {
      set({ error: 'Falha ao encontrar o filme', loading: false });
    }
  },

  fetchNewMovies: async (aa) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`https://api.rapidapi.com/imdb-api-endpoint?rapidapi-key=d9295bc353msh7219f405a84687dp14d7a1jsnfe532143f22c`);
      set({ movies: response.data.Search || [], loading: false });
    } catch (error) {
      set({ error: 'Falha ao encontrar o filme', loading: false });
    }
  }

}));

export default useMovieStore;
