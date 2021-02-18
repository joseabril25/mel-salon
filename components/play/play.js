import React, { Component } from 'react';
import Link from 'next/link'
import ReactWOW from 'react-wow'
import Partner from '../home-seven/Partner';

const Play = () => {
    return (
        <div className="header-head">
            <div className="play-section">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 lucky-wheel">
                            <div className="ml-banner-content">
                                <img src={require("../../static/images/play-images/lucky-wheel.png")} className="wow fadeInUp lucky-image" data-wow-delay="0.5s" alt="image" />
                            </div>
                            <Link href="#">
                                <a className="btn btn-secondary play-button">Spin</a>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="ml-banner-single-image">
                                <ReactWOW delay='0.5s' animation='fadeInUp'>
                                    <img src={require("../../static/images/hero/header-image1.png")} className="wow fadeInUp wow-image" data-wow-delay="0.5s" alt="image" />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Partner />
        </div>
    );
}

export default Play;