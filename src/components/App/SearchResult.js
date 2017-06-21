import React from 'react';

class SearchResult extends React.Component {
  render() {
    return (<div >
      <img src={this.props.thumbnail}/>{this.props.movieName}
    </div>);
  }
}

export default SearchResult;
