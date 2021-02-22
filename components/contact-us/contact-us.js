import React from 'react';
import * as Icon from 'react-feather';

const ContactUs = () => {
    return (
        <div className='container contact-container'>
            <img src={require("../../static/images/modal-images/email-icon.png")} className="wow fadeInUp email-image" data-wow-delay="0.5s" alt="image" />
            <h1 className='signin-title'>DO YOU HAVE A YEHEY! MESSAGE FOR US?</h1>
            <div className="row contact-buttons">
                <div className="col-lg-12 col-md-6">
                    <h5 className="button-label">EMAIL US</h5>
                    
                    <a href='mailto:yeheyphilippines@gmail.com' className='contact-fb-login' >
                        {/* {isLoading && <div className={styles.spinner} />} */}
                        <Icon.Mail />
                        yeheyphilippines@gmail.com
                    </a>
                </div>
            </div>
            <div className="row contact-buttons">
                <div className="col-lg-12 col-md-6">
                    <h5 className="button-label">FOLLOW US</h5>
                    <a href='mailto:yeheyphilippines@gmail.com' className='contact-fb-login' >
                        {/* {isLoading && <div className={styles.spinner} />} */}
                        <Icon.Facebook className='fb-icon' />
                        www.facebook.com/YeheyPH
                    </a>
                </div>
            </div>
        </div>
  );
}

export default ContactUs;