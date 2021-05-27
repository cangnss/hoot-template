import React from 'react'
import GigsterImg from './GigsterImg';

function Gigster() {
    return (
        <section id="gigster">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <span className="fw-bold display-4">Gigster guides</span>
                    </div>
                </div>
                <div className="row">
                    <GigsterImg gigsterImg="https://picsum.photos/300/300" gigsterText="How should your gigster portfolio looks like?" />
                    <GigsterImg gigsterImg="https://picsum.photos/300/300" gigsterText="How can you promote your gigs on social media" />
                    <GigsterImg gigsterImg="https://picsum.photos/300/300" gigsterText="How to price your gigs?" />
                    <GigsterImg gigsterImg="https://picsum.photos/300/300" gigsterText="Top ten mistakes to watch out for as a fresher" />
                </div>
            </div>
        </section>
    )
}
export default Gigster;