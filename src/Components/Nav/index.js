import React from 'react';
import { Row, Col } from '../Grid';
import './style.scss';

function sideNav(props) {
    function switchPage(event, page) {
        event.preventDefault();
        console.log(page);
    }
    return (
        <div className="side-menu remove-left-margin">
            <div
                className="menu-item center-content"
                onClick={(event) => switchPage(event, "about")}
            >
                <Row>
                    <Col size="12">
                        <i className="fas fa-user-tie" />
                    </Col>
                    <Col size="12">
                        <p className="menu-titles">About</p>
                    </Col>
                </Row>
            </div>
            <div className="horizontal-line" />
            <div
                className="menu-item center-content"
                onClick={(event) => switchPage(event, "projects")}
            >
                <Row>
                    <Col size="12">
                        <i className="fas fa-laptop-code fa-2x" />
                    </Col>
                    <Col size="12">
                        <p className="menu-titles">Projects</p>
                    </Col>
                </Row>
            </div>
            <div className="horizontal-line" />
            <div
                className="menu-item center-content"
                onClick={(event) => switchPage(event, "blog")}
            >
                <Row>
                    <Col size="12">
                        <i className="fas fa-clipboard-list fa-2x" />
                    </Col>
                    <Col size="12">
                        <p className="menu-titles">Blog</p>
                    </Col>
                </Row>
            </div>
            <div className="horizontal-line" />
            <div
                className="menu-item center-content"
                onClick={(event) => switchPage(event, "contact")}
            >
                <Row>
                    <Col size="12">
                        <i className="fas fa-address-card fa-2x" />
                    </Col>
                    <Col size="12">
                        <p className="menu-titles">Contact</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default sideNav;