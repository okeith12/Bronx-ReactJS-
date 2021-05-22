import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import { IoPawSharp } from 'react-icons/io5';

export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top:0;
z-index: 10;

@media screen and (max-width:960px){
    transition: 0.5s all ease;
}
`;
export const Container = styled.div`
display:flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px
`;
export const NavLogo = styled(LinkR)`
    color: var(--light-color);
    justify-self: flex-start;
    cursor:pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    letter-spacing: 0.2em;
    text-decoration: none;
    line-height: 58px;

    &:hover{
        color:var(--secondary-color);
    }
`;
export const Paw = styled(IoPawSharp)`
    height: 32px;
    width: 32px;
    margin-right: 5px;
    padding-bottom: 3px;
`;
export const Hamburger = styled.button`
position: absolute;
color: red;
top: 50%;
right: 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background-color: red;
border: 2px;
cursor: pointer;
padding: 0;
z-index: 10;

:hover{
    background-color: var(--primary-color);
}

`;