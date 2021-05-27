import React from 'react'
import InspringImg from './InspringImg';
import './InspiringStories.css';

function InspiringStories() {
    return (
        <section id="stories" className="mb-5">
            <div className="container">
                <div className="row">
                    <span className="display-3 fw-bold">Inspiring Stories</span>
                    <div className="col-md-6 mt-4 img-container">
                        <img src="https://picsum.photos/500/500" className="img-fluid left-img" />
                        <p class="bottom-left fw-bold fs-3 ms-5 w-75">Copywriting her way to financial independence - Aashna's story</p>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="col-md-12 mb-5 img-container p-2">
                            <img src="https://picsum.photos/450/220" className="img-fluid right-img" />
                            <p class="bottom-left fw-bold fs-5 ms-5 w-75">Gig with google-How did Rahul pitch to his dream company</p>
                        </div>
                        <div className="col-md-12 img-container p-2">
                            <img src="https://picsum.photos/450/220" className="img-fluid right-img" />
                            <p class="bottom-left fw-bold fs-5 ms-5 w-75">Turning a gig into my first start-up.How did Kshitij find a teammate in his one of the client.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default InspiringStories;