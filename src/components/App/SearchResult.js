import React from 'react';
import s from './App.scss';

class SearchResult extends React.Component {
  render() {
    return (<div className={s['search-result']} >
      <img src={this.props.thumbnail}/>{this.props.movieName}
    </div>);
  }
}

export default SearchResult;
