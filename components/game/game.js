import React from 'react'
import * as Icon from 'react-feather';

const Game = () => {
    return (
        <section className="features-area ptb-80 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>WIN EXCITING PRICES! TRY OUT OUR LATEST PRODUCTS!</h2>
                    <h3>GET FREEBIES & GIVEAWAYS THAT WILL MAKE YOU GO YEHEY!</h3>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <Icon.Settings />
                            </div>

                            <h3>Application for Test Here</h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <Icon.Mail />
                            </div>

                            <h3>Play goes here</h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Game