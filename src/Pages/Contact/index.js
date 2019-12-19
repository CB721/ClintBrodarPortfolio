import React from 'react';
import { Row, Col } from '../../Components/Grid';
import './style.scss';

function Contact(props) {
    return (
        <div className="page-section-border">
            <div className="page-section">
                <Row>
                    <Col size="12">
                        <h3 className="secondary-header-text">
                            Contact
                        </h3>
                        <div className="horizontal-line" />
                    </Col>
                </Row>
                <div className="contact-section">
                    <Row>
                        <Col size="12">
                            <div className="center-content">
                                <p>
                                    <strong>
                                        Email. . . . .
                                </strong>
                                    clintbrodar@gmail.com
                            </p>
                            </div>
                        </Col>
                        <Col size="12">
                            <div className="center-content">
                                <p>
                                    <strong>
                                        Phone. . . . .
                                    </strong>
                                (206) 488-3956
                            </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Contact;