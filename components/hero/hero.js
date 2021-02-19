import React, { Component } from 'react';
import Link from 'next/link'
import ReactWOW from 'react-wow'
import Partner from '../partner';

const Hero = () => {
    return (
        <div className="header-head">
            <div className="ml-main-banner">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="ml-banner-content">
                                <h1>Everyday's a reason to share and shout YEHEY!</h1>
                                <p>Exciting Prices and giveaways await you, as you review and as you play!</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="ml-banner-single-image">
                                <ReactWOW delay='0.5s' animation='fadeInUp'>
                                    <img src={require("../../static/images/hero/header-image1.png")} className="wow fadeInUp wow-image" data-wow-delay="0.5s" alt="image" />
                                    <Link href="#">
                                        <a className="btn btn-primary hero-button">Share the Yehey! & Join!</a>
                                    </Link>
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

export default Hero;