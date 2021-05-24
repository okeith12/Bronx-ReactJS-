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
padding: 0 20px;
max-width: 1600px
`;
export const NavLogo = styled(LinkR)`
    color: var(--light-color);
    justify-self: flex-start;
    cursor:pointer;
    font-size: var(--xl-font-size);
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    letter-spacing: 0.2em;
    text-decoration: none;
    line-height: 58px;
    margin-top: var(--mb-1);
    transition: all 0.3s linear;

    &:hover{
        color:var(--primary-color);
    }
`;
export const Paw = styled(IoPawSharp)`
    height: 40px;
    width: 40px;
    margin-right: var(--mb-1);
    padding-bottom: 3px;
`;
export const Hamburger = styled.button`
position: absolute;
margin-top: 1.5rem;
right: 8%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 4.5rem;
height: 2rem;
background: transparent;
border: 2px;
cursor: pointer;
padding: 0;
z-index: 10;


&:focus{
    outline: none;
}
&:hover > *{
    background-color: var(--primary-color);  
    
}

div{
  
    width: ${({isOpen}) => (isOpen ? '35px':'55px')}; 
    height: 0.35rem;
    background: var(--light-color);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    transform: ${({isOpen}) => (isOpen ? 'rotate(45deg)':'rotate(0)')};


}
div:nth-child(2){
    width: 35px;
    top: ${({isOpen}) => (isOpen ? '8px':'0')};
    left: ${({isOpen}) => (isOpen ? '10px':'0')};
    margin-right:20px;
    transform: ${({isOpen}) => (isOpen ? 'rotate(-46deg)':'rotate(0)')};
}

`;
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right:${({isOpen}) => (isOpen ? '10%':'-10%')};
background-color: var(--accent-color); //transparent if want to use backdrop
margin-top: var(--mb-3);
width: 100%;
max-width: 400px;
border-radius: 25px;
height: 45px;
transition: 0.2s ease-in-out;
box-shadow: 0 3px 5px rgba(0,0,0,0.2);
// backdrop-filter: blur(10px);
// -webkit-backdrop-filter: blur(10px);
opacity: ${({isOpen}) => (isOpen ? '100%':'0%')};


@media screen and (max-width:768px){
    display: grid;
    max-width: 180px;
    margin-right: 0;
    margin-top: ${({isOpen}) => (isOpen ? '6rem':'0')};
    height: 180px;
    border-radius: 20px;
    
}
`
export const NavItem = styled.li`

text-align:center;
height: 80px;

`
export const NavLink = styled(LinkR)`
    color: var(--light-color);
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    font-size: var(--lg-font-size);
    height: 100%;
    cursor: pointer;
    margin-right: var(--mb-6);
    margin-left: var(--mb-6);
    transition: all 0.4s linear;
    &:hover{
        color: var(--primary-color);

    }
    @media screen and (max-width:768px){
     
        margin-right: 0;
        margin-left: 0;
        
        
    }
`