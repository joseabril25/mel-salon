import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Basic from '../components/basic';
import BasicSecond from '../components/basic-second';
import MainContainer from '../components/container';
import Location from '../components/location';
import Preferences from '../components/preferences';
import PreferencesSecond from '../components/preferences-second';
import PreferencesThird from '../components/preferences-third';

const Registration = () => {
    const registerPage = useSelector(({ register }) => register.registerPage);

    const Content = () => {
        switch (registerPage) {
            case 1: 
                return <Basic />
            case 2: 
                return <BasicSecond />
            case 3: 
                return <Location />
            case 4: 
                return <Preferences />
            case 5: 
                return <PreferencesSecond />
            case 6: 
                return <PreferencesThird />
            default:
                break;
        }
    }

    return(
        <MainContainer>
            <div className="register-header-head">
                <div className="register-banner">
                    <div className="container-fluid register-title-container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12 register-title">
                                    <h2 className={registerPage === 1 || registerPage === 2 ? 'with-background' : ''}>Basic Details</h2>
                            </div>
                            <div className="col-lg-4 col-md-12 register-title">
                                    <h2 className={registerPage === 3 ? 'with-background' : ''}>Location</h2>
                            </div>
                            <div className="col-lg-4 col-md-12 register-title">
                                    <h2 className={registerPage === 4 || registerPage === 5 || registerPage === 6 || registerPage === 7 ? 'with-background' : ''}>Preferences</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12">
                                <Content />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </MainContainer>
    )
}

export default Registration;