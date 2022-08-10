

export const sect = {
    popularity: {
      title: 'The most popular now',
      data: () => state => state.persReducer.popularity
    },
    upcomming: {
      title: 'Upcoming releases',
      data: () => state => state.persReducer.upcommingmovies
    },
    favs: {
      data: () => state => state.persReducer.Favs.movies
    }
  }