function getMovies(searchText) {
  const movies = [];
  for (let i = 1; i <= numMovies; i++) {
    movies.push({
      movieName: 'Movie ' + i,
      thumbnailURL: 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg'
    });
  }
  return movies;
}
