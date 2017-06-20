import React from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import s from './App.scss';
import {Container, Row, Col, Card} from 'wix-style-react/dist/src/Grid';
import SearchInput from './SearchInput';

// function searchButtonClicked() {
//   console.log('Search button');
// }

// function generateMovies(numMovies) {
//   const movies = [];
//   for (let i = 1; i <= numMovies; i++) {
//     movies.push('Movie ' + i);
//   }
//   return movies;
// }
function App() {

  // const movies = generateMovies(20);
  // const movieItems = movies.map((movieName, idx) =>
  //   <div key={idx} className={s.searchresult}>
  //     <img src="http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg"/>{movieName}
  //   </div>);

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
            <SearchInput placeholder="Enter video name (e.g. 'Kitty 2018')"/>
          </Col>

          <Col span={8}>
            <div className={s.videoplayer}/>
          </Col>

        </Row>

      </Container>

    </div>
  );
}

App.propTypes = {
  t: PropTypes.func
};

export default translate(null, {wait: true})(App);
