//NAVBAR 
import React from 'react';
import {Nav,Container,NavLogo,Paw,Hamburger} from './[SC]Navbar';

export const Navbar = () => {
    return (
        <>
            <Nav>
                <Container>
                    <NavLogo to="/">BR <Paw/> NX.</NavLogo>
                    <Hamburger>

                    </Hamburger>
                </Container>
            </Nav>
        </>
    )
}
