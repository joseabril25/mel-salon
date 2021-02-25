import React from 'react';
import { useDispatch } from 'react-redux';
import ApplyForm from '../apply-form';

const Apply = ({ }) => {

    return (
        <div className="apply-header-head">
            <div className="applyion-banner">
                <div className="container-fluid apply-title-container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 section-title title-align">
                            <h2 className="text-white">Confirm or Update Your Contact Number & Delivery Address Below</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center apply-content">
                        <div className="col-lg-6 col-md-12 apply-title">
                            <div className='apply-branding-box-0'>
                                <img src={require("../../static/images/apply-images/product.png")} className="apply-image" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 apply-title">
                            < ApplyForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apply;