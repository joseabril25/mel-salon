import React from 'react';
import SuggestForm from '../../components/suggest-form'

const Suggest = () => {
    return (
        <div className="suggest-header-head">
            <div className="suggestion-banner">
                <div className="container-fluid suggest-title-container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 suggest-title">
                                <h2 className="text-white">Suggest a Product You Want Tested</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 suggest-title">
                                < SuggestForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Suggest;