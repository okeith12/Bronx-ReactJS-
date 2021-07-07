import React from 'react'
import AnniversaryVideo from '../components/AnniversaryVideo'
import DogSection from '../components/dogs'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import StorySection from '../components/StorySection'
import { storySectionFour, storySectionOne, storySectionThree, storySectionTwo } from '../components/StorySection/Data'

const About = () => {
    return (
    <>
    <Navbar/>
     <StorySection {...storySectionOne}/>
     <StorySection {...storySectionTwo}/>
     <StorySection {...storySectionThree}/>
     <StorySection {...storySectionFour}/>
     <DogSection/>
     <Footer/>
     </>
    )
}

export default About
