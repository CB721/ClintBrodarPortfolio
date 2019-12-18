import React, { useEffect, useState } from 'react';
import Cube from './Components/Cube';
import Main from './Components/Main';
import { Row, Col } from './Components/Grid';
import './App.scss';


function App() {
  return (
    <div className="app-background">
      <Cube />
      <div className="container">
        <Row>
          <Col size="md-6 12">
            <Main />
          </Col>
          <Col size="md-6 12">

          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;

