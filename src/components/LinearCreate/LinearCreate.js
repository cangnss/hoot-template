import React from 'react'
import './LinearCreate.css';

function LinearCreate() {
    return (
        <section id="linearCreate" className="mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="position-relative">
                    <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 700" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#002bdc88"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,233 0,233 C 149.46428571428572,203.89285714285714 298.92857142857144,174.78571428571428 422,180 C 545.0714285714286,185.21428571428572 641.7499999999999,224.75 750,217 C 858.2500000000001,209.25 978.0714285714287,154.21428571428572 1095,149 C 1211.9285714285713,143.78571428571428 1325.9642857142858,188.39285714285714 1440,233 C 1440,233 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 350)"></path><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,466 0,466 C 126.46428571428572,445.42857142857144 252.92857142857144,424.85714285714283 364,414 C 475.07142857142856,403.14285714285717 570.75,402 680,403 C 789.25,404 912.0714285714287,407.14285714285717 1041,418 C 1169.9285714285713,428.85714285714283 1304.9642857142858,447.42857142857144 1440,466 C 1440,466 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 350)"></path></svg>                        <div className="position-absolute top-0 start-50 translate-middle">
                            <p className="fw-bold fs-3">What are you waiting for? Get. Set. Gig!</p>
                            <p className="fw-bold fs-3">Financial independence is one click away</p>
                            <button type="button" className="create-btn">Create your profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LinearCreate;