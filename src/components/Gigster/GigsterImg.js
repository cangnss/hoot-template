import React from 'react'
import './Gigster.css';
function GigsterImg(props) {
    return (
        <div className="col-md-3 mt-3">
            <img src={props.gigsterImg} className="img-fluid" />
            <p className="fw-bold w-100 fs-5 mt-2">{props.gigsterText}</p>
        </div>
    )
}
export default GigsterImg;