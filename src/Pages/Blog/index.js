import React from 'react';
import { Row, Col } from '../../Components/Grid';
import './style.scss';

function Blog(props) {
    return (
        <div className="page-section-border">
            <div className="page-section">
                <Row>
                    <Col size="12">
                        <h3 className="secondary-header-text">
                            Blog
                        </h3>
                        <div className="horizontal-line" />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Blog;