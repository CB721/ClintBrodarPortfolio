import React from 'react';
import { Row, Col } from '../Grid';
import Slide from 'react-reveal/Slide';
import './style.scss';

function SidePage({section}) {
    return (
        <div className="side-page">
            {section}
        </div>
    )
}

export default SidePage;