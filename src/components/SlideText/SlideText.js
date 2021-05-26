import React from 'react';
import './SlideText.css';

function SlideText() {
    return (
        <section id="slideText" className="mt-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className=" display-4 fw-bold slide-title">Trending Blogs</h1>
                        <p className="display-6 grab fw-bold">Grab your thinking caps</p>
                    </div>
                    <div className="col-md-12">
                        <figure>
                            <blockquote class="blockquote">
                                <p>"Curiosity didn't kill the cat, it created the mousetrap"</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Patrich Hanlon
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-md-12">
                        <p className="st-bottom-p">So read on to nourish your mind. The wheel isn't going to reinvent itself</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SlideText;