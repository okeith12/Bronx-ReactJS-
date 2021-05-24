import React, {useState} from 'react'
import { Navbar } from '../components/Navbar'

const Home = () => {
    const[isOpen,setOpen] = useState(false);
    const toggle = () =>{setOpen(!isOpen);};

    return (
        <>
        <Navbar isOpen={isOpen} toggle={toggle}/>
        </>
    )
}

export default Home
