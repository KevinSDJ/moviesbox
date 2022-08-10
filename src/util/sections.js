import { fetchAllPopMov } from './../store/slices/popularityMovieSlice'
import { fetchAllUpcMovies } from './../store/slices/upcommingMovieSlice'

export const sect = {
    popularity: {
      title: 'The most popular now',
      data: () => state => state.persReducer.popularity,
      action:()=>fetchAllPopMov()
    },
    upcomming: {
      title: 'Upcoming releases',
      data: () => state => state.persReducer.upcommingmovies,
      action:()=>fetchAllUpcMovies()
    },
    favs: {
      data: () => state => state.persReducer.Favs.movies
    }
  }