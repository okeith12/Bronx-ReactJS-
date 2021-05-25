import styled from 'styled-components';
import hero01 from '../../images/hero_01.jpg';
import {Link as LinkS} from 'react-scroll';

export const HeroContainer = styled.div`
background: url(${hero01}) center center/cover no-repeat;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.4);
object-fit: contain;



`
export const HeroTitle = styled.h1`
color: var(--light-color);
font-size: var(--lg-font-size);
margin-top: 0px;
letter-spacing: 5px;
text-align: center;

`
export const ColoredWord = styled.span`
color: var(--primary-color);`

export const ScrollDownBtn = styled(LinkS)`
    color: var(--light-color);
    font-size: 32px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 5px;
    line-height: 20px;
    cursor: pointer;


    

    &:hover{
        color: var(--primary-color);
        transition: 0.2s ease-in;
    }


    @media screen and (max-width: 960px){
        font-size: 70px;
    }
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
`