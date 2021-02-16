import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import Hero from '../components/hero'
import About from '../components/about'
import Brand from '../components/brand'
import Game from '../components/game'
import Header from '../components/header/Header'

export default () => (
    <NoSSR>
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            {/* Menu */}
            <Header />
            {/* Big Hero */}
            <Hero />
            {/* 2nd Section */}
            <About />
            {/* 3rd Section */}
            <Game />
            {/* 4rd Section */}
            <Brand />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)