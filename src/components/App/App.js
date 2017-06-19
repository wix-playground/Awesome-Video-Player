import React from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import s from './App.scss';
import {Container, Row, Col, Card} from 'wix-style-react/dist/src/Grid';
// import {Container, Row, Col, Card} from 'wix-style-react/dist/src/Grid';
import {TextField, Input} from 'wix-style-react';
// import {TextField} from 'wix-style-react/dist/src/TextField';
// import {Input} from 'wix-style-react/dist/src/Input';
// import {Label} from 'wix-style-react/dist/src/Label';
function renderStandardInput() {
  return (
    <TextField>

      <Input
        id="textField"
        placeholder="Default text goes"
        />
    </TextField>
  );
}
function App() {

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
            {renderStandardInput()}
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
