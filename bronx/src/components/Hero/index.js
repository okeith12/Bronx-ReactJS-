import React from 'react';
import { HeroImageData } from '../../images/ImageData';


import {HeroContainer,HeroTitle,ScrollDownBtn,ColoredWord} from "./[SC]Hero";

const Hero = () => {

    return (
        <HeroContainer>
            <HeroTitle>The Life of <ColoredWord>Bronx</ColoredWord></HeroTitle>
            <ScrollDownBtn>Scroll Down</ScrollDownBtn>
        </HeroContainer>
    )
}

export default Hero
