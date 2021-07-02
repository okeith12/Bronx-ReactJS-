import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import { NavLogo } from '../Navbar/[SC]Navbar';


export const FooterContainer = styled.footer`
min-height:20vh;
margin-top:auto;
background: var(--accent-color);

`
export const FootLogo = styled(NavLogo)`
padding-top:20px;
display: flex;
align-items:center;
justify-content:center;
text-align:center;
`
export const FooterMenu = styled.ul`
display:flex;
justify-content:center;
align-items:center;
list-style: none;
padding-left:6px;
`

export const FooterItem = styled.li`
display:flex;
justify-content:center;
align-items:center;
padding:10px;

&:first-child::after{
    content: "||";
    width: 1px;
    height: -2rem;
    left: 0;
    right: 0;
    margin-left: var(--mb-1);
    top: 0;
    color: var(--primary-color);
}

`

export const FooterLink = styled(LinkR)`
text-decoration:none;
font-family:'Lora';
font-size: 16px;
text-align:center;
color: var(--light-color);
&:hover{
    color:var(--primary-color);
}

`

export const FooterCopy = styled.p`
bottom:0;
margin-top:2rem;
color: var(--light-color);
@media screen and (max-width:768px){
    font-size:12px;
}
@media screen and (max-width:500px){
    font-size:10px;
}
`
export const WebLink = styled(LinkR)`
text-decoration:none;
color: var(--light-color);

&:hover{
    color:var(--primary-color);
}

`