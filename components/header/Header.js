import React, { useEffect, useState } from 'react'
import { withRouter } from 'next/router';
import { connect, useDispatch } from 'react-redux'
import Link from 'next/link'
import menu from './header-list';
import { toggleModal } from '../../store/actions/app.actions';
import { authLogout } from '../../store/actions/auth.actions';

const Header = ({ isLoggedIn, user }) => {
console.log("🚀 ~ file: Header.js ~ line 10 ~ Header ~ user", user)
    const [collapsed, setCollapsed] = useState(true);
    const dispatch = useDispatch()

    const toggleNavbar = () => {
        // this.setState({
        //     collapsed: !this.state.collapsed,
        // });
        setCollapsed(!collapsed)
    }

    useEffect(() => {
        const elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })
    
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
        <header id="header" className="navbar-style-three">
            <div id="navbar" className={`startp-nav`}>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <img className='logo-img' src={require("../../static/images/header-images/logo.png")} alt="logo" />
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav nav ml-auto">
                                {
                                    isLoggedIn ? 
                                    <>
                                        <li className="nav-item">
                                            <a className="nav-link" onClick={ () => dispatch(toggleModal({active: true, type: 'appointment'}))}>Set Appointment</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">Hello, {user.username}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" onClick={ () => dispatch(authLogout())}>Logout</a>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <a className="nav-link" onClick={ () => dispatch(toggleModal({active: true, type: 'login'}))}>Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" onClick={ () => dispatch(toggleModal({active: true, type: 'sign-up'}))}>Sign Up</a>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>

                    </nav>
                </div> 
            </div>

        </header>
    )
}

const mapStateToProps = ({ auth })=> ({
    isLoggedIn: auth.isLoggedIn,
    user: auth.user
})

export default withRouter(connect(mapStateToProps)(Header))