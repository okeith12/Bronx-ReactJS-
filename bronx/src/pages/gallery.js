import React from 'react'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import GalleryHero from '../components/GalleryHero';
import GalleryPic from '../components/GalleryPic';

const Gallery1 = () => {
    return (
        <>
         <Navbar/>
         <GalleryHero/>
         <GalleryPic/>
         <Footer/>   
        </>
    )
}

export default Gallery1
