export default (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case 'REMOVE_MOVIE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie.id !== action.payload),
      };
    case 'ADD_MOVIE_TO_WATCHED':
      return {
        ...state,
        watchlist: state.watchlist.filter(
          movie => movie.id !== action.payload.id,
        ),
        watched: [action.payload, ...state.watched],
      };
    case 'MOVE_TO_WATCHLIST':
      return {
        ...state,
        watched: state.watched.filter(movie => movie.id !== action.payload.id),
        watchlist: [action.payload, ...state.watchlist],
      };
    case 'REMOVE_FROM_WATCHED':
      return {
        ...state,
        watched: state.watched.filter(movie => movie.id !== action.payload),
      };
    case 'SEARCH_MOVIES':
      //Include DB connection
      //SELECT list of movies using action.payload
      
      return {
        ...state,
        search: {
          page: 1,
          results: [
            {
              adult: false,
              backdrop_path: '/sWvxBXNtCOaGdtpKNLiOqmwb10N.jpg',
              genre_ids: [14, 28],
              id: 557,
              original_language: 'en',
              original_title: 'Spider-Man',
              overview:
                'After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.',
              popularity: 1012.877,
              poster_path: '/gSZyYEK5AfZuOFFjnVPUCLvdOD6.jpg',
              release_date: '2002-05-01',
              title: 'Spider-Man',
              video: false,
              vote_average: 7.2,
              vote_count: 14924,
            },
            {
              adult: false,
              backdrop_path: '/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg',
              genre_ids: [28, 12, 878],
              id: 634649,
              original_language: 'en',
              original_title: 'Spider-Man: No Way Home',
              overview:
                'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
              popularity: 8448.569,
              poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
              release_date: '2021-12-15',
              title: 'Spider-Man: No Way Home',
              video: false,
              vote_average: 8.4,
              vote_count: 3510,
            },
          ],
          total_pages: 1,
          total_results: 2,
        },
      };
    default:
      return state;
  }
};
