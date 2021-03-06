import React from 'react';
import Link from 'next/link';
import boxContent from './brand-content';

const Brand = () => {
    return (
        <section className="branding-area">
            <div >
                <div className="row branding-section">
                    <div className={`col-lg-6 col-sm-12 col-md-12`}>
                    </div>
                    <div className={`col-lg-6 col-sm-12 col-md-12 section-title`}>
                        <h2 className="text-white">Empower your brand to build relationships with your consumers!</h2>
                        <h2 className="text-white">Create action! Reward brand loyalty</h2>
                        <Link href="#">
                            <a className="btn btn-secondary branding-button-title">Learn More</a>
                        </Link>
                    </div>
                </div>

                <div className="row branding-box-area">
                    <div className={`col-lg-6 col-sm-12 col-md-12 branding-boxes`}>
                        <div className={`single-branding-box-0 section-title`}>
                            <h2 className="text-white">Check out Yehey!'s latest games & product samples for testing!</h2>
                            <div className="row branding-box-area">
                                <div className='col-lg-6 col-sm-12 col-md-12'>
                                    <Link href="/play-yehey">
                                        <a className="btn btn-secondary branding-button">Play Yehey!</a>
                                    </Link>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-md-12'>
                                    <Link href="/apply-for-test">
                                        <a className="btn btn-secondary branding-button">Apply For Test</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-6 col-sm-12 col-md-12 branding-boxes-1`}>
                        <div className={`single-branding-box-1 section-title`}>
                            <h2 className="text-white">Do you have a product in mind that you want us to try and test out? </h2>
                            <div className="row">
                                <div className='col-lg-3 col-sm-3 col-md-3'>
                                    <img src={require("../../static/images/branding-section/product-1.png")} className="side-image" alt="image" />
                                </div>
                                <div className='col-lg-6 col-sm-6 col-md-6'>
                                    <Link href="/suggest-product">
                                        <a className="btn btn-secondary branding-button">Send Us Your Suggestions!</a>
                                    </Link>
                                </div>
                                <div className='col-lg-3 col-sm-3 col-md-3'>
                                    <img src={require("../../static/images/branding-section/product-2.png")} className="side-image"alt="image" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Brand