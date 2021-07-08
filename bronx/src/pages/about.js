import { motion } from 'framer-motion'
import React from 'react'
import { animationOne, animationOneTransition,  } from '../animations'
import DogSection from '../components/dogs'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import StorySection from '../components/StorySection'
import { familyOne, storySectionFour, storySectionOne, storySectionThree, storySectionTwo } from '../components/StorySection/Data'
import Empty from '../components/empty';
const About = () => {
    return (
    <motion.div
    initial="out" 
        animate="in"
        exit="out"
        variants={animationOne}
        transition={animationOneTransition}
    >
    <Navbar/>
     <StorySection {...storySectionOne}/>
     <StorySection {...storySectionTwo}/>
     <StorySection {...storySectionThree}/>
     <StorySection {...storySectionFour}/>
     <Empty/>
     <DogSection {...familyOne}/>
     <Footer/>
     </motion.div>
    )
}

export default About
