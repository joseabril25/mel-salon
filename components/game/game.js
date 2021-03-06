import React from 'react'
import Link from 'next/link'

const Game = () => {
    return (
        <section className="solutions-area">
            <div className="solutions-container">
                <div className="row features-row">
                    <div className="col-lg-12 col-sm-12 col-md-12">
                        <div className="section-title">
                            <h2>Win Exciting Prices! Try Out Our Latest Products! </h2>
                            <h2>Get Freebies & Giveaways That Will Make You Go Yehey!  </h2>
                        </div>
                    </div>
                </div>

                <div className="row boxes-row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <img src={require("../../static/images/game/products.png")} className="wow fadeInUp game-image" data-wow-delay="0.5s" alt="image" />
                            <Link href="#">
                                <a className="btn btn-primary game-button">Apply Now To Try Out Your First Yehey! Product! Register Now!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <img src={require("../../static/images/game/wheel.png")} className="wow fadeInUp game-image" data-wow-delay="0.5s" alt="image" />
                            <Link href="/play-yehey">
                                <a className="btn btn-primary game-button">Play Yehey! And Get A Chance To Win Your First Freebie! Register Now!</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Game