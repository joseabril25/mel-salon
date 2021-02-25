import React from 'react'
import { useDispatch } from 'react-redux';
import Link from 'next/link'
import * as Icon from 'react-feather'
import links from './footer-links';
import { toggleModal } from '../../store/actions/app.actions';
const Footer = () => {
    const dispatch = useDispatch()
    return (
        <footer className="footer-area">
            <div >
                <div className="row footer-first-section">
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-logo">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../static/images/header-images/logo.png")} alt="logo" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 footer-social">
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
                                        <img src={require("../../static/images/footer/tgc-logo.png")} alt="logo" className="sub-logo" />
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
                                        <img src={require("../../static/images/footer/hey-logo.png")} alt="logo" className="sub-logo" />
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
                                            {
                                            link.title === 'Contact Us' ?
                                            <Link href="#">
                                                <a onClick={() => dispatch(toggleModal({active: true, type: 'contact'}))}>{link.title}</a> 
                                            </Link>
                                            :
                                            <Link href={`/${link.link}`}>
                                                <a>{link.title}</a>
                                            </Link>
                                            }
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