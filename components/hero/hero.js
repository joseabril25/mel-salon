import React, { Component } from 'react';
import Link from 'next/link'
import ReactWOW from 'react-wow'

const Hero = () => {
    return (
        <div className="ml-main-banner">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="ml-banner-content">
                            <h1>Everyday's a reason reason to share and shout YEHEY!</h1>
                            <p>Exciting Prices and giveaways await you, as you review and as you play!</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="ml-banner-single-image">
                            <ReactWOW delay='0.5s' animation='fadeInUp'>
                                <img src={require("../../static/images/hero/header-image1.png")} className="wow fadeInUp" data-wow-delay="0.5s" alt="image" />
                            </ReactWOW>
                            <Link href="#">
                                <a className="btn btn-primary">Share the Yehey and Join</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;