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
                                <img src={props.project.mainImage} alt={props.project.name} className="project-modal-images" />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="1" />
                            <Col size="10">
                                <Col size="12">
                                    <h1 className="header-text">
                                        {props.project.name}
                                    </h1>
                                </Col>
                                {props.project.type.map((type, index) => (
                                    <Col size="12" key={index}>
                                        <span className="project-type">
                                            {type}
                                        </span>
                                    </Col>
                                ))}
                                <Col size="12">
                                    <p className="project-description">
                                        {props.project.description}
                                    </p>
                                </Col>
                                <Col size="12">
                                    <p>
                                        User Stories
                                    </p>
                                    <ul className="project-ul">
                                        {props.project.userStories.map((story, index) => (
                                            <li className="project-li" key={index}>
                                                {story}
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                                <Col size="12">
                                    <p className="project-main-details">
                                        {props.project.mainDetails}
                                    </p>
                                </Col>
                                {props.project.secondaryImage ? (
                                    <Col size="12">
                                        <img src={props.project.secondaryImage} alt={props.project.name} className="project-modal-images" />
                                    </Col>
                                ) : (<div />)}
                                <Col size="12">
                                    <p className="project-main-details">
                                        {props.project.secondaryDetails}
                                    </p>
                                </Col>
                                {props.project.tertiaryDetails ? (
                                    <Col size="12">
                                        <p className="project-main-details">
                                            {props.project.tertiaryDetails}
                                        </p>
                                    </Col>
                                ) : (<div />)}
                                {props.project.responsibilities.length > 0 ? (
                                    <Col size="12">
                                        <p>
                                            I was responsible for the following:
                                        </p>
                                        <ul className="project-ul">
                                            {props.project.responsibilities.map((task, index) => (
                                                <li className="project-li" key={index}>
                                                    {task}
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                ) : (<div />)}
                                {props.project.tertiaryImage ? (
                                    <Col size="12">
                                        <img src={props.project.tertiaryImage} alt={props.project.name} className="project-modal-images" />
                                    </Col>
                                ) : (<div />)}
                                <Col size="12">
                                    <p className="project-challenge">
                                        {props.project.challenge}
                                    </p>
                                </Col>
                                <Col size="12">
                                    <p>
                                        Technologies used:
                                    </p>
                                    <ul className="project-ul">
                                        {props.project.technologies.map((tech, index) => (
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
                                    {props.project.secondRepoLink ? (
                                        <Col size="12">
                                            <Row>
                                                <Col size="4">
                                                    <div className="center-content">
                                                        <a href={props.project.deployedLink}>
                                                            <h5>
                                                                View Project
                                                        </h5>
                                                        </a>
                                                    </div>
                                                </Col>
                                                <Col size="4">
                                                    <div className="center-content">
                                                        <a href={props.project.repoLink}>
                                                            <h5>
                                                                View Main Repo
                                                            </h5>
                                                        </a>
                                                    </div>
                                                </Col>
                                                <Col size="4">
                                                    <div className="center-content">
                                                        <a href={props.project.secondRepoLink}>
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
                                                            <a href={props.project.deployedLink}>
                                                                <h5>
                                                                    View Project
                                                        </h5>
                                                            </a>
                                                        </div>
                                                    </Col>
                                                    <Col size="6">
                                                        <div className="center-content">
                                                            <a href={props.project.repoLink}>
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