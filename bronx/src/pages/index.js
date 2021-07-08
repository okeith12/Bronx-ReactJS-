import React from 'react'
import AnniversaryVideo from '../components/AnniversaryVideo';
import Footer from '../components/Footer';
import GallerySummary from '../components/GallerySummary';
import Hero from '../components/Hero';
import { Navbar } from '../components/Navbar'
import Quote from '../components/Quote';
import Summary from '../components/summary';
import { motion } from 'framer-motion';
import { animationOne, animationOneTransition } from '../animations';



const Home = () => {
   
    return (
        <motion.div
        initial="out" 
        animate="in"
        exit="out"
        variants={animationOne}
        transition={animationOneTransition}
        >
        <Navbar/>
        <Hero/>
        <Summary/>
        <GallerySummary/>
        <AnniversaryVideo/>
        <Quote/>
        <Footer/>
        </motion.div>
    )
}

export default Home
