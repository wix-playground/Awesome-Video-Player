import React from 'react';
import s from './App.scss';

class SearchResult extends React.Component {
  render() {
    const {thumbnail, movieName} = this.props;

    return (<div className={s['search-result']} >
      <img src={thumbnail}/>{movieName}
    </div>);
  }
}

export default SearchResult;
