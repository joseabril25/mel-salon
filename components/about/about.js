import React from 'react';
import Link from 'next/link';
import boxContent from './box-content';

const About = () => {
    return (
        <section className="solutions-area">
            <div className="solutions-container">
                <div className="row about-row">
                    <div className="col-lg-12 col-sm-12 col-md-12">
                        <div className="ml-banner-content section-title">
                            <h2>Yehey! values the organic, unfiltered opinion of our consumers towards our products. </h2>
                            <h2>In our online sampling community, what you think, matters!  </h2>
                            <h2>If our product makes you go Yehey! </h2>
                            <h2>It makes us go Hurray! </h2>
                        </div>
                    </div>
                </div>

                <div className="row solutions-box-area">
                    {
                        boxContent.map(box =>
                            <div className={`col-lg-3 col-sm-12 col-md-6 solutions-boxes`}>
                                <div className={`single-solutions-box-${box.id}`}>
                                    <Link href={`/${box.link}`}>
                                        <a className="btn btn-secondary solutions-button">{box.buttonText}</a>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default About