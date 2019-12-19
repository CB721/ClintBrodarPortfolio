import React from 'react';
import { Row, Col } from '../Grid';
import profileImage from '../../assets/images/profile.jpg';
import './style.scss';

function Main(props) {
    function goToContact(event) {
        event.preventDefault();
        console.log("go to contact");
    }
    return (
        <div className="main-section remove-left-margin">
            <Row>
                <Col size="12">
                    <div className="heading-section">
                        <div className="header-image" />
                        <div className="profile-image-section">
                            <img src={profileImage} alt="clint brodar" className="profile-image" />
                        </div>
                    </div>
                </Col>
                <Col size="12">
                    <div className="main-info-section">
                        <div className="main-info">
                            <h1 className="header-text">
                                Clint Brodar
                        </h1>
                        </div>
                        <div className="main-info">
                            <h3 className="position-text">
                                Full Stack Web Developer
                        </h3>
                        </div>
                        <div className="main-info">
                            <a target="_blank" rel="noopener noreferrer" href={"https://github.com/CB721"}>
                                <span className="fab fa-github social-links"></span>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/clint-brodar-b4233b177/">
                                <span className="fab fa-linkedin social-links"></span>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/10840842/cb721?tab=profile">
                                <span className="fab fa-stack-overflow social-links"></span>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.codewars.com/users/cb721">
                                <span className="iconify social-links" data-icon="simple-icons:codewars" data-inline="false"></span>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col size="12">
                    <Row>
                        <Col size="5">
                            <div className="horizontal-line remove-left-margin" />
                            <div className="main-contact-section remove-left-margin">
                                <a href="https://docs.google.com/document/d/1KgyORb4xePMjWTB2FjAQ30-Plnfo0qXCAQuDC9RowzU/export?format=pdf" download>
                                    <h5>
                                        Resume
                                    </h5>
                                </a>
                            </div>
                        </Col>
                        <Col size="2">
                            <div className="center-content">
                                <div className="vertical-line" />
                            </div>
                        </Col>
                        <Col size="5">
                            <div className="horizontal-line remove-right-margin" />
                            <div className="main-contact-section remove-right-margin" onClick={(event) => goToContact(event)}>
                                <h5>
                                    Contact Me
                                </h5>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Main;