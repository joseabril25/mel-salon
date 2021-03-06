import React, { Component } from 'react';
import Link from 'next/link'
import Wheel from '../wheel';
import { useDispatch } from 'react-redux';
import { toggleSpin } from '../../store/actions/app.actions';

const Play = () => {
    const dispatch = useDispatch();
    return (
        <div className="header-head play-header">
            <div className="play-section">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-12 lucky-wheel">
                            <div className="ml-banner-content">
                                <img src={require("../../static/images/play-images/lucky-wheel.png")} className="wow fadeInUp lucky-image" data-wow-delay="0.5s" alt="image" />
                            </div>
                            <Link href="#">
                                <a className="btn btn-secondary play-button" onClick={() => dispatch(toggleSpin(true))}>Spin</a>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="ml-banner-single-image">
                                <Wheel />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="play-box">
                                <h2>Prize of the Week</h2>
                                <img src={require("../../static/images/play-images/products.png")} className="wow fadeInUp prize-image" data-wow-delay="0.5s" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Play;