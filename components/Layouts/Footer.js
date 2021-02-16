import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import links from './footer-links';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div >
                <div className="row footer-first-section">
                    <div className="col-lg-3 col-md-6 footer-logo">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../static/images/footer/yehey-logo.png")} alt="logo" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-social">
                        <div className="single-footer-widget single-footer-widget-social">
                            <ul className="social-links">
                                <li>
                                    <Link href="#">
                                        <a className="linkedin"><Icon.Globe /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="facebook">
                                            <Icon.Facebook />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="instagram"><Icon.Instagram /></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row footer-second-section">
                    <div className="col-lg-1 col-md-3 footer-logo">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../static/images/footer/tgc-logo.png")} alt="logo" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-1 col-md-3 footer-logo">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../static/images/footer/hey-logo.png")} alt="logo" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-3 footer-logo">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="#">
                                    <p>© 2020 YEHEY PHILIPPINES. All Rights Reserved.</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 footer-social">
                        <div className="single-footer-widget">
                            <ul className="menu-links">
                                {
                                    links.map(link => 
                                        <li>
                                            <Link href="#">
                                                <a>{link.title}</a>
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer