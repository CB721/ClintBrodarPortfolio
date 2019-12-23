import React from 'react';
import { Row, Col } from '../Grid';
import './style.scss';

function ProjectModal(props) {
    return (
        <div>
            {props.open ? (
                <div className="project-modal">
                    <div className="modal-side" onClick={(event) => props.closeModal(event)} />
                    <div className="modal-content-section">
                        <Row>
                            <Col size="12">
                                <img src={props.project[0].mainImage} alt={props.project[0].name} className="project-modal-images" />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="1" />
                            <Col size="10">
                                <Col size="12">
                                    <h1 className="header-text">
                                        {props.project[0].name}
                                    </h1>
                                </Col>
                                {props.project[0].type.map((type, index) => (
                                    <Col size="12" key={index}>
                                        <span className="project-type-modal">
                                            {type}
                                        </span>
                                    </Col>
                                ))}
                                {props.project[0].teamSize > 1 ? (
                                    <Col size="12">
                                        <p className="project-headings">
                                            {props.project[0].teamSize} Member Team
                                        </p>
                                    </Col>
                                ) : (
                                    <Col size="12">
                                        <p className="project-headings">
                                            Solo Project
                                        </p>
                                    </Col>
                                )}
                                <Col size="12">
                                    <p className="project-description center-content">
                                        {props.project[0].description}
                                    </p>
                                </Col>
                                <Col size="12">
                                    <p className="project-headings">
                                        User Stories
                                    </p>
                                    <blockquote>
                                        <ul className="project-ul">
                                            {props.project[0].userStories.map((story, index) => (
                                                <li className="project-li add-quotes" key={index}>
                                                    {story}
                                                </li>
                                            ))}
                                        </ul>
                                    </blockquote>
                                </Col>
                                <Col size="12">
                                    <p className="project-main-details">
                                        {props.project[0].mainDetails}
                                    </p>
                                </Col>
                                {props.project[0].secondaryImage ? (
                                    <Col size="12">
                                        <img src={props.project[0].secondaryImage} alt={props.project[0].name} className="project-modal-images" />
                                    </Col>
                                ) : (<div />)}
                                <Col size="12">
                                    <p className="project-main-details">
                                        {props.project[0].secondaryDetails}
                                    </p>
                                </Col>
                                {props.project[0].tertiaryDetails ? (
                                    <Col size="12">
                                        <p className="project-main-details">
                                            {props.project[0].tertiaryDetails}
                                        </p>
                                    </Col>
                                ) : (<div />)}
                                {props.project[0].responsibilities.length > 0 ? (
                                    <Col size="12">
                                        <p className="project-headings">
                                            I was responsible for the following:
                                        </p>
                                        <ul className="project-ul">
                                            {props.project[0].responsibilities.map((task, index) => (
                                                <li className="project-li" key={index}>
                                                    {task}
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                ) : (<div />)}
                                {props.project[0].tertiaryImage ? (
                                    <Col size="12">
                                        <img src={props.project[0].tertiaryImage} alt={props.project[0].name} className="project-modal-images" />
                                    </Col>
                                ) : (<div />)}
                                <Col size="12">
                                    <p className="project-challenge">
                                        {props.project[0].challenge}
                                    </p>
                                </Col>
                                <Col size="12">
                                    <p className="project-headings">
                                        Technologies used:
                                    </p>
                                    <ul className="project-ul">
                                        {props.project[0].technologies.map((tech, index) => (
                                            <li className="project-li" key={index}>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                                <Col size="12">
                                    <div className="horizontal-line" />
                                </Col>
                                <div className="project-links">
                                    {props.project[0].secondRepoLink ? (
                                        <Col size="12">
                                            <Row>
                                                <Col size="4">
                                                    <div className="center-content">
                                                        <a href={props.project[0].deployedLink}>
                                                            <h5>
                                                                View Project
                                                        </h5>
                                                        </a>
                                                    </div>
                                                </Col>
                                                <Col size="4">
                                                    <div className="center-content">
                                                        <a href={props.project[0].repoLink}>
                                                            <h5>
                                                                View Main Repo
                                                            </h5>
                                                        </a>
                                                    </div>
                                                </Col>
                                                <Col size="4">
                                                    <div className="center-content">
                                                        <a href={props.project[0].secondRepoLink}>
                                                            <h5>
                                                                View Second Repo
                                                        </h5>
                                                        </a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    ) : (
                                            <Col size="12">
                                                <Row>
                                                    <Col size="6">
                                                        <div className="center-content">
                                                            <a href={props.project[0].deployedLink}>
                                                                <h5>
                                                                    View Project
                                                        </h5>
                                                            </a>
                                                        </div>
                                                    </Col>
                                                    <Col size="6">
                                                        <div className="center-content">
                                                            <a href={props.project[0].repoLink}>
                                                                <h5>
                                                                    View Repo
                                                            </h5>
                                                            </a>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        )}
                                </div>
                            </Col>
                            <Col size="1" />
                        </Row>
                    </div>
                    <div className="modal-side" onClick={(event) => props.closeModal(event)} />
                </div>
            ) : (<div />)}
        </div>
    )
}

export default ProjectModal;