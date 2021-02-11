import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import boxContent from './box-content';

const About = () => {
    return (
        <section className="solutions-area">
            <div>
                <div className="section-title">
                    <h1>Yehey! values the organic, unfiltered opinion of our consumers towards our products. </h1>
                    <h1>In our online sampling community, what you think, matters!  </h1>
                    <h1>If our product makes you go Yehey! </h1>
                    <h1>It makes us go Hurray! </h1>
                </div>

                <div className="row solutions-box-area">
                    {
                        boxContent.map(box =>
                            <div className={`col-lg-3 col-sm-6 col-md-6 solutions-boxes`}>
                                <div className={`single-solutions-box-${box.id}`}>
                                    <Link href="#">
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