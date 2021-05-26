import React from 'react'
import './AuthorPost.css';

export default function PostCard(props) {
    return (
        <div class="card-group mb-5">
            <div class="card">
                <img src={props.cardImg} class="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fw-bold">{props.cardTitle}</h5>
                    <p class="card-text">{props.cardText}</p>
                </div>
                <div className="d-flex card-bottom">
                    <img src={props.cardProfileImg} className="rounded-circle ms-3" />
                    <span className="fw-bold mt-3 ms-4">{props.cardProfileName}</span>
                    <span className="date-text mt-3 ms-4">{props.cardDate}</span>
                </div>
            </div>
        </div>
    )
}
