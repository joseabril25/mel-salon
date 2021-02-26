import React from 'react'
import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import Link from 'next/link'
import menu from './header-list';
import { toggleModal } from '../../store/actions/app.actions';
import { authLogout } from '../../store/actions/auth.actions';

class Header extends React.Component {

    state = {
        collapsed: true,
        isUser: this.props.user
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    

    render(){
        const { collapsed } = this.state;
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
                                onClick={this.toggleNavbar} 
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
                                        menu.map(m => 
                                            <li className="nav-item">
                                                <Link activeClassName="active" href={`/${m.link}`}>
                                                    <a className="nav-link">{m.title}</a>
                                                </Link>
                                            </li>
                                        )
                                    }
                                    {
                                        this.props.isLoggedIn ? 
                                        <>
                                            {/* <li className="nav-item">
                                                <a className="nav-link">Hello, {this.props.isUser.username}</a>
                                            </li> */}
                                            <li className="nav-item">
                                                <a className="nav-link" onClick={ () => this.props.handleLogout()}>Logout</a>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li className="nav-item">
                                                <a className="nav-link" onClick={ () => this.props.handleToggleModal()}>Login</a>
                                            </li>
                                            <li className="nav-item">
                                                <Link activeClassName="active" href='/registration'>
                                                    <a className="nav-link">Join Yehey!</a>
                                                </Link>
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
}

const mapStateToProps = ({ auth })=>{
    return{
        isLoggedIn: auth.isLoggedIn,
        user: auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleToggleModal: () => dispatch(toggleModal({active: true, type: 'login'})),
        handleLogout: () => dispatch(authLogout()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))