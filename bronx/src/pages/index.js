import React, {useState} from 'react'
import Hero from '../components/Hero';
import { Navbar } from '../components/Navbar'
import Summary from '../components/summary';

const Home = () => {
    const[isOpen,setOpen] = useState(false);
    const toggle = () =>{setOpen(!isOpen);};

    return (
        <>
        <Navbar isOpen={isOpen} toggle={toggle}/>
        <Hero/>
        <Summary/>
        </>
    )
}

export default Home
