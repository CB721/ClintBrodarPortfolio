import React from 'react';
import { Row, Col } from '../../Components/Grid';
import Facts from '../../Components/Facts';
import FactData from '../../assets/data/factData.json';
import './style.scss';

function About(props) {
    return (
        <div className="page-section-border">
            <div className="page-section">
                <Row>
                    <Col size="12">
                        <h3 className="secondary-header-text">
                            About Me
                        </h3>
                        <div className="horizontal-line" />
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-1 12">
                        <div className="vertical-line" />
                    </Col>
                    <Col size="sm-11 12">
                        <div className="remove-right-margin personal-desc">
                            <p>
                                I am Clint Brodar. I was born and raised in Cleveland, OH. In college, I was in the Recording Arts & Technology program where I studied music engineering and production.
                            </p>
                            <p>
                                In 2014, I moved to Tacoma, WA. Since then, I have had many different jobs ranging from customer service to insurance sales to inventory management. In each role, I gravitated towards analytical responsibilities like creating Excel spreadsheets and managing inventory.  This led me to the University of Washington where I graduated with a certificate in Full Stack Web Development in 2019.
                            </p>
                            <p>
                                Currently, I am a teaching assistant at the University of Washington.  This position has been rewarding because it has challenged my problem-solving skills.  In order to help the students, I often I have to solve the same problem several different ways.
                            </p>
                            <p>
                                For fun, I enjoy producing music and playing piano. I also like cooking, exercising, playing Othello, and playing video games.
                            </p>
                        </div>
                    </Col>
                    <Col size="12">
                        <Row>
                            <Col size="6">
                                <div className="remove-right-margin center-content">
                                    <p>
                                        <strong>
                                            Age. . . . .
                                        </strong>
                                        27
                                    </p>
                                </div>
                            </Col>
                            <Col size="6">
                                <div className="center-content">
                                    <p>
                                        <strong>
                                            Location. . . . . 
                                        </strong>
                                        Seattle
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="12">
                        <h3 className="secondary-header-text">
                            Fun Facts
                        </h3>
                        <div className="horizontal-line" />
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-1 12">
                        <div className="vertical-line" />
                    </Col>
                    <Col size="sm-11 12">
                        <Row>
                            {FactData.map((fact, index) => (
                                <Col size="3" key={index}>
                                    <Facts
                                        icon={fact.image}
                                        fact={fact.fact}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About;