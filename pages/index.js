import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import HeaderTwo from '../components/Layouts/HeaderTwo'
import Partner from '../components/home-seven/Partner'
import AboutArea from '../components/home-seven/AboutArea'
import Services from '../components/home-seven/Services'
import Funfacts from '../components/home-seven/Funfacts'
import Projects from '../components/home-seven/Projects'
import Pricing from '../components/home-seven/Pricing'
import Feedback from '../components/home-seven/Feedback'
import BlogCard from '../components/home-seven/BlogCard'
import Newsletter from '../components/home-seven/Newsletter'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import Hero from '../components/hero'
import About from '../components/about'
import Game from '../components/game'

export default () => (
    <NoSSR>
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <HeaderTwo />
            <Hero />
            <Partner />
            <About />
            <Game />
            <AboutArea />
            <Services />
            <Funfacts />
            <Projects />
            <Pricing />
            <Feedback />
            <BlogCard />
            <Newsletter />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)