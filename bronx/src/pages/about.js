import React from 'react'
import AnniversaryVideo from '../components/AnniversaryVideo'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import StorySection from '../components/StorySection'
import { storySectionOne } from '../components/StorySection/Data'

const About = () => {
    return (
    <>
    <Navbar/>
     <StorySection {...storySectionOne}/>
     <AnniversaryVideo/>
     <Footer/>
     </>
    )
}

export default About
