import React from 'react'
import Link from 'next/link'

const Game = () => {
    return (
        <section className="features-area">
            <div className="container">
                <div className="section-title">
                    <h1>Win Exciting Prices! Try Out Our Latest Products! </h1>
                    <h1>Get Freebies & Giveaways That Will Make You Go Yehey!  </h1>
                </div>

                <div className="row">
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
                            <Link href="#">
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