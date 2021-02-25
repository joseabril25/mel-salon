import React from 'react';
import Link from 'next/link'

const ApplyFinish = () => {
    return (
        <div className="apply-header-head">
            <div className="applyion-banner">
                <div className="container-fluid apply-title-container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 apply-finish-title">
                                <h2 className="text-white">Thank you for applying to test our new yehey! featured product!</h2>
                                <h3>We will send you a quick notification if you meet our requirements to test this product!</h3>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center apply-content">
                        <div className="col-lg-6 col-md-12 apply-finish-title">
                            <div className='apply-confirm-box'>
                                <img src={require("../../static/images/apply-images/product.png")} className="apply-image" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 apply-finish-title">
                            <div className="row align-items-center apply-content">
                                <div className="col-lg-12 col-md-12 right-finish-title">
                                    <h3>For the meantime, you can participate in other yehey! activities we have in store!</h3>
                                </div>
                            </div>
                            <div className="row align-items-center apply-content">
                                <div className="col-lg-6 col-md-12 right-finish-title">
                                    <div className='apply-confirm-box-mini'>
                                        <Link href="/play-yehey">
                                            <a className="btn btn-secondary apply-confirm-button">Play Yehey! To Win Exciting Prizes!</a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 right-finish-title">
                                    <div className='apply-confirm-box-mini-rate'>
                                        <Link href="#">
                                            <a className="btn btn-secondary apply-confirm-button">Rate Your Favorite Product Here!</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplyFinish;