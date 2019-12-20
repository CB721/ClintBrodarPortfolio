import React from 'react';
import { Row, Col } from '../Grid';
import './style.scss';

function Post(props) {
    return (
        <div className="blog-post">
            <Row>
                <Col size="12">
                    <a target="_blank" rel="noopener noreferrer" href={props.link}>
                        <img src={props.path} alt={props.title} className="blog-image" />
                    </a>
                </Col>
                <Col size="12">
                    <div className="blog-info">
                        <div className="blog-title">
                            <h5>
                                {props.title}
                            </h5>
                        </div>
                        <div className="blog-date">
                            <strong>
                                {props.date}
                            </strong>
                        </div>
                        <div className="blog-type">
                            <p>
                                {props.type}
                            </p>
                        </div>
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default Post;