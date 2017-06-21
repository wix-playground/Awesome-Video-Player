import React from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import s from './App.scss';
import {Container, Row, Col, Card} from 'wix-style-react/dist/src/Grid';
import SearchInput from './SearchInput';
import SearchResultsContainer from './SearchResultsContainer';
import YouTube from 'react-youtube';
import './staticData';

function getMovies(searchText) {

  searchText = searchText.toLowerCase();

  const {items} = window.youtubeListData.data;
  const filteredItems = items.filter(
    item => item.title.toLowerCase().indexOf(searchText) !== -1);

  const movies = filteredItems.map((item, idx) => {
    return {
      movieName: item.title,
      thumbnailURL: item.thumbnail.sqDefault,
      url: item.player.default,
      videoId: item.player.videoId,
      movieIndex: idx
    };
  });


  // filteredItems.fo

  return movies;
}

const opts = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};


class App extends React.Component {

  constructor() {
    super();

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onResultClick = this.onResultClick.bind(this);

    this.state = {
      results: getMovies(''),
      videoId: '2g811Eo7K8U'
    };
  }

  onSearchChange(e) {
    const searchText = e.target.value;
    this.setState({results: getMovies(searchText)});
  }


  onResultClick(idx) {
    const movie = this.state.results[idx];
    this.setState({videoId: movie.videoId});
    // console.log(`move idx ${idx}`);
    // 1. add css to chosen result
    // 2. remove from previous
    // const searchText = e.target.value;
    // this.setState({results: getMovies(searchText)});
  }


  render() {
    return (
      <div className={s.root}>
        <div className={s.header}>
          <h2>Awesome Video Player</h2>
        </div>

        <Container>
          <Row>
            <Col span={12}>
              <Card>
                <Card.Header title="Search Movies"/>
              </Card>
            </Col>
          </Row>

          <Row>

            <Col span={4}>
              <SearchInput placeholder="Enter video name (e.g. 'Kitty 2018')" onChange={this.onSearchChange}/>
              <SearchResultsContainer movies={this.state.results} onResultClick={this.onResultClick}/>
            </Col>

            <Col span={8}>
              <YouTube opts={opts} videoId={this.state.videoId}/>
            </Col>

          </Row>

        </Container>

      </div>
    );
  }
}

App.propTypes = {
  t: PropTypes.func
};

export default translate(null, {wait: true})(App);
