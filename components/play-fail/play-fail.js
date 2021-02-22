import React from 'react';
import * as Icon from 'react-feather'

const PlayFail = () => {
    return (
        <div className='container contact-container'>
            <h1 className='signin-title'>Don't worry! Tomorrow's another day!</h1>
            <div className="row contact-buttons">
                <div className="col-lg-12 col-md-6">
                    <h5 className="button-label">Try again tomorrow.</h5>
                    <h5 className="button-label">For now, follow us on Facebook.</h5>
                </div>
            </div>
            <div className="row play-fail-buttons">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <a href='mailto:yeheyphilippines@gmail.com' className='fail-fb-login-2' >
                        {/* {isLoading && <div className={styles.spinner} />} */}
                        <Icon.Facebook className='fb-icon' />
                        <img className='fail-yehey-img' src={require("../../static/images/header-images/logo.png")} alt="logo" />
                    </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <a href='mailto:yeheyphilippines@gmail.com' className='fail-fb-login' >
                        {/* {isLoading && <div className={styles.spinner} />} */}
                        <Icon.Facebook className='fb-icon' />
                        <img className='fail-img' src={require("../../static/images/play-images/johnsons.png")} alt="logo" />
                    </a>
                </div>
            </div>
        </div>
  );
}

export default PlayFail;