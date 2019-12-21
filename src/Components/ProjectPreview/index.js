import React from 'react';
import { Row, Col } from '../Grid';
import './style.scss';

function Post(props) {
    return (
        <div className="project-preview">
            <Row>
                <Col size="12">
                    <img src={props.mainImage} alt={props.title} className="project-main-image" />
                </Col>
                <Col size="12">
                    <div className="center-content">
                        <p className="project-preview-title">
                            {props.name}
                        </p>
                    </div>
                </Col>
                {props.types.map((type, index) => (
                    <Col size="12" key={index}>
                        <div className="center-content">
                            <span className="project-type">
                                {type}
                            </span>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Post;