import React, {useLayoutEffect} from 'react'
import {FooterContainer,FooterMenu,FooterItem,FooterLink,FooterCopy,FootLogo,WebLink} from './[SC]Footer'
import {Paw} from '../Navbar/[SC]Navbar'
const Footer = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
          <FooterContainer>
          <FootLogo to="/">BR<Paw/>NX.</FootLogo> 
            <FooterMenu>
                <FooterItem>
                    <FooterLink to="/about">ABOUT</FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink to="/gallery">GALLERY</FooterLink>
                </FooterItem>
                </FooterMenu>
                <FooterCopy>© 2021 <WebLink to='https://www.percyus.com' target = "_blank" 
rel = "noopener noreferrer">Percyus.</WebLink> All Rights Reserved</FooterCopy> 
            </FooterContainer>  
        </>
    )
}

export default Footer
