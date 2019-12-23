import React from 'react';
import { Row, Col } from '../Grid';
import './style.scss';

function Facts(props) {
    return (
        <div className="remove-left-margin fact">
            <Row>
                <Col size="12">
                    <div className="center-content">
                        <i className={props.icon} />
                    </div>
                </Col>
                <Col size="12">
                    <div className="center-content">
                        <p className="fact-desc">
                            {props.fact}
                        </p>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Facts;