import React, { useState } from 'react';
import { Row, Col } from '../Grid';
import Loading from '../Loading';
import './style.scss';

function Preview(props) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className="project-preview"
            onClick={(event) => props.openModal(event, props.name)}
        >
            <Row>
                <Col size="12">
                    <img
                        style={loaded ? {} : { display: 'none' }}
                        src={props.mainImage}
                        alt={props.title}
                        className="project-main-image"
                        onLoad={() => setLoaded(true)}
                    />
                    {
                        !loaded &&
                        <div className="center-content">
                            <Loading />
                        </div>
                    }
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

export default Preview;