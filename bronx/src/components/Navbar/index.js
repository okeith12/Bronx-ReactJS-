//NAVBAR 
import React, {useState} from 'react';
import {bool, func} from 'prop-types';
import {Nav,Container,NavLogo,Paw,Hamburger,NavMenu,NavItem,NavLink} from './[SC]Navbar';

export const Navbar = () => {
    
    const[isOpen,setOpen] = useState(false);
    const toggle = () =>{setOpen(!isOpen);};

    return (
        <>
            <Nav>
                <Container>
                    <NavLogo to="/">BR<Paw/>NX.</NavLogo>
                    <Hamburger isOpen={isOpen} onClick={toggle}>
                        <div></div>
                        <div></div>
                    </Hamburger>
                    <NavMenu isOpen={isOpen} >
                        <NavItem>
                            <NavLink to='/about'>About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to='/gallery'>Gallery
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                </Container>
            </Nav>
        </>
    )
}
Navbar.propTypes= {
    isOpen: bool.isRequired,
    setOpen: func.isRequired,
};