import React, {useLayoutEffect} from 'react'
import Footer from '../components/Footer';
import GallerySummary from '../components/GallerySummary';
import Hero from '../components/Hero';
import { Navbar } from '../components/Navbar'
import Quote from '../components/Quote';
import Summary from '../components/summary';




const Home = () => {
   
    return (
        <>
        <Navbar/>
        <Hero/>
        <Summary/>
        <GallerySummary/>
        <Quote/>
        <Footer/>
        </>
    )
}

export default Home
