import React from 'react';
import s from './App.scss';
import SearchResult from './SearchResult';

class SearchResultsContainer extends React.Component {
  render() {
    const results = this.props.movies.map(
      (movie, idx) => <SearchResult key={idx} thumbnail={movie.thumbnailURL} movieName={movie.movieName}/>);
    return (<div className={s['search-results-container']} >
      {results}
    </div>);
  }
}

export default SearchResultsContainer;
