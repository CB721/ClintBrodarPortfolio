import React from 'react';
import './style.scss';

function SidePage(props) {
    return (
        <div
            className={props.slide ? "side-animate" : "side-page"}
        >
            {props.section}
        </div>
    )
}

export default SidePage;