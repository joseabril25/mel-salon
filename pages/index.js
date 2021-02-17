import React from 'react'
import Hero from '../components/hero'
import About from '../components/about'
import Brand from '../components/brand'
import Game from '../components/game'
import MainContainer from '../components/container';

const Home = ({ }) => {
    
    return (
        <MainContainer>
            {/* Big Hero */}
            <Hero />
            {/* 2nd Section */}
            <About />
            {/* 3rd Section */}
            <Game />
            {/* 4rd Section */}
            <Brand />
        </MainContainer>
    )
}

export default Home;