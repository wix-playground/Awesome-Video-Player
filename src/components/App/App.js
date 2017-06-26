import React from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import s from './App.scss';
import {Container, Row, Col, Card} from 'wix-style-react/dist/src/Grid';
import SearchInput from './SearchInput';
import SearchResultsContainer from './SearchResultsContainer';
import YouTube from 'react-youtube';
import './staticData';

const YOUTUBE_API_KEY = 'AIzaSyAz92Z8ExWU423gMEkfhimGEoAOlaKMusY';

function getJSON(url, success, error) {
  'use strict';
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      } else {
        error(xhr.responseText);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

function searchYoutubeWithKeyword(keyword, success, error) {
  getJSON(`https://www.googleapis.com/youtube/v3/search?type=video&q=${keyword}&maxResults=25&part=snippet&key=${YOUTUBE_API_KEY}`, success, error);
}

function createMovieFromYoutubeJSON(json, movieIndex) {
  const {snippet} = json;

  const movie = {
    movieName: snippet.description,
    thumbnailURL: snippet.thumbnails.default.url,
    videoId: json.id.videoId,
    movieIndex
  };

  return movie;
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

    this.searchResults = [];

    getJSON(`https://www.googleapis.com/youtube/v3/search?type=video&q=cats&maxResults=25&part=snippet&key=${YOUTUBE_API_KEY}`, response => {
      console.log(response);
    }, err => {
      console.log(err);
    });


    this.onSearchChange = this.onSearchChange.bind(this);
    this.onResultClick = this.onResultClick.bind(this);

    this.state = {
      videoId: '2g811Eo7K8U',
      searchStr: '',
    };
  }

  onSearchChange(e) {
    const searchText = e.target.value;

    const that = this;

    searchYoutubeWithKeyword(searchText, response => {
      const movies = response.ites;
      console.log(movies);

      this.searchResults = response.items.map((item, idx) => {
        return createMovieFromYoutubeJSON(item, idx);
      });

      that.setState({searchStr: searchText});
    }, err => {
      console.log(err);
    });



  }


  onResultClick(idx) {
    const movie = this.searchResults[idx];
    this.setState({videoId: movie.videoId});
    // console.log(`move idx ${idx}`);
    // 1. add css to chosen result
    // 2. remove from previous
    // const searchText = e.target.value;
    // this.setState({results: getMovies(searchText)});
  }


  render() {
    const results = this.searchResults;
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
              <SearchInput placeholder="Enter video name (e.g. 'Kitty 2018')" onChange={e => this.onSearchChange(e)}/>
              <SearchResultsContainer movies={results} onResultClick={this.onResultClick}/>
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
