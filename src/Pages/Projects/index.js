import React, { useEffect } from 'react';
import { Row, Col } from '../../Components/Grid';
import ProjectPreview from '../../Components/ProjectPreview';
import Loading from '../../Components/Loading';
import './style.scss';

function Projects(props) {
    useEffect(() => {}, [props.ProjectsData]);
    return (
        <div className="page-section-border">
            <div className="page-section">
                <Row>
                    <Col size="12">
                        <h3 className="secondary-header-text">
                            Projects
                        </h3>
                        <div className="horizontal-line" />
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-11 12">
                        <div className="remove-left-margin">
                            <Row>
                                <Col size="3">
                                    <div
                                        className="category center-content remove-right-margin"
                                        onClick={(event) => props.changeProjectCategory(event, 0)}
                                    >
                                        <p>
                                            All
                                        </p>
                                    </div>
                                </Col>
                                <Col size="3">
                                    <div
                                        className="category center-content remove-right-margin"
                                        onClick={(event) => props.changeProjectCategory(event, 1)}
                                    >
                                        <p>
                                            Front End
                                        </p>
                                    </div>
                                </Col>
                                <Col size="3">
                                    <div
                                        className="category center-content remove-right-margin"
                                        onClick={(event) => props.changeProjectCategory(event, 2)}
                                    >
                                        <p>
                                            Back End
                                        </p>
                                    </div>
                                </Col>
                                <Col size="3">
                                    <div
                                        className="category center-content remove-right-margin"
                                        onClick={(event) => props.changeProjectCategory(event, 3)}
                                    >
                                        <p>
                                            Analytics / Game
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="12">

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                {props.ProjectsData.length > 1 ? (
                    <Row>
                        {props.ProjectsData.map((project, index) => (
                            <Col size="6" key={index}>
                                <ProjectPreview
                                    mainImage={project.mainImage}
                                    name={project.name}
                                    types={project.type}
                                    openModal={props.openModal}
                                />
                            </Col>
                        ))}
                    </Row>
                ) : (
                        <Row>
                            <Col size="12">
                                <div className="center-content">
                                    <Loading />
                                </div>
                            </Col>
                        </Row>
                    )}
            </div>
        </div>
    )
}

export default Projects;