import React from 'react';
import * as Icon from 'react-feather'

const PlaySuccess = () => {
    return (
        <div className='container contact-container'>
            <h1 className='play-success-title'>Congratulations!</h1>
            <h5 className="button-label">You've won the following prizes!</h5>
            <div className="row play-fail-buttons">
                <div className="col-lg-3 col-md-6 col-sm-12">
                        {/* {isLoading && <div className={styles.spinner} />} */}
                    <img className='success-yehey-img' src={require("../../static/images/play-images/JB-shampoo.png")} alt="logo" />
                    <h6 className="button-label">5 Pcs</h6>
                    <p className="button-label">Johnson's Baby</p>
                    <p className="button-label">Shampoo Shiny Drops</p>
                    <p className="button-label">8ML Sachet</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                        {/* {isLoading && <div className={styles.spinner} />} */}
                    <img className='success-yehey-img' src={require("../../static/images/play-images/JB-powder.png")} alt="logo" />
                    <h6 className="button-label">5 Pcs</h6>
                    <p className="button-label">Johnson's Baby</p>
                    <p className="button-label">Shampoo Shiny Drops</p>
                    <p className="button-label">8ML Sachet</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                        {/* {isLoading && <div className={styles.spinner} />} */}
                    <img className='success-yehey-img' src={require("../../static/images/play-images/JB-cologne.png")} alt="logo" />
                    <h6 className="button-label">5 Pcs</h6>
                    <p className="button-label">Johnson's Baby</p>
                    <p className="button-label">Shampoo Shiny Drops</p>
                    <p className="button-label">8ML Sachet</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                        {/* {isLoading && <div className={styles.spinner} />} */}
                    <img className='success-yehey-img' src={require("../../static/images/play-images/JB-soaps.png")} alt="logo" />
                    <h6 className="button-label">5 Pcs</h6>
                    <p className="button-label">Johnson's Baby</p>
                    <p className="button-label">Shampoo Shiny Drops</p>
                    <p className="button-label">8ML Sachet</p>
                </div>
            </div>
        </div>
  );
}

export default PlaySuccess;