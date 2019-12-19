import React, { useEffect, useState } from 'react';
import Cube from './Components/Cube';
import Main from './Components/Main';
import SidePage from './Components/SidePage';
import SideNav from './Components/Nav';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import { Row, Col } from './Components/Grid';
import './App.scss';


function App() {
  const [section, setSection] = useState(0);
  const [slide, setSlide] = useState(true);

  function switchPage(event, page) {
    event.preventDefault();
    setSection(page);
    setSlide(true);
    setTimeout(() => {
      setSlide(false);
    }, 1000);
  }
  return (
    <div className="app-background">
      <Cube />
      <div className="container">
        <Row>
          <Col size="md-1 12">
            <SideNav
              switchPage={switchPage}
            />
          </Col>
          <Col size="md-11 12">
            <Row>
              <Col size="md-6 12">
                <Main />
              </Col>
              <Col size="md-6 12">
                {section === 0 ? (
                  <SidePage
                    slide={slide}
                    section={<About

                    />}
                  />
                ) : section === 1 ? (
                  <SidePage
                    slide={slide}
                    section={<Projects

                    />}
                  />
                ) : section === 2 ? (
                  <SidePage
                    slide={slide}
                    section={<Blog

                    />}
                  />
                ) : section === 3 ? (
                  <SidePage
                    slide={slide}
                    section={<Contact

                    />}
                  />
                ) : (<div />)}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;

