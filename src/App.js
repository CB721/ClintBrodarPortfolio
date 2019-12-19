import React, { useEffect, useState } from 'react';
import Cube from './Components/Cube';
import Main from './Components/Main';
import SidePage from './Components/SidePage';
import SideNav from './Components/Nav';
import { Row, Col } from './Components/Grid';
import './App.scss';


function App() {
  return (
    <div className="app-background">
      <Cube />
      <div className="container">
        <Row>
          <Col size="md-1 12">
            <SideNav />
          </Col>
          <Col size="md-11 12">
            <Row>
              <Col size="md-6 12">
                <Main />
              </Col>
              <Col size="md-6 12">
                <SidePage 

                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;

