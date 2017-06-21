import React from 'react';
import s from './App.scss';

class SearchResult extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.movieIndex);
  }

  render() {
    const {thumbnail, movieName} = this.props;

    return (<div className={s['search-result']} onClick={this.onClick} >
      <img src={thumbnail}/>{movieName}
    </div>);
  }
}

export default SearchResult;
