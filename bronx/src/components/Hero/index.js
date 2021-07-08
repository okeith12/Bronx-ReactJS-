import React from 'react';
import {HeroContainer,HeroTitle,ScrollDownBtn,ColoredWord} from "./[SC]Hero";

const Hero = () => {

    return (
        <HeroContainer>
            <HeroTitle>The Life of <ColoredWord>Bronx</ColoredWord></HeroTitle>
            {/* <ScrollDownBtn to='/about'>Scroll Down</ScrollDownBtn> */}
        </HeroContainer>
    )
}

export default Hero
