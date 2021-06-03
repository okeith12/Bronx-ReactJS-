import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import { ArrowRight } from '../summary/[SC]summary';

export const GallerySumContainer = styled.div`
min-height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: radial-gradient(circle, rgba(57,56,63,1) 0%, rgba(57,56,63,1) 52%, rgba(30,31,38,1) 83%);
margin-top: 6vmax;
margin: 0 auto;
flex-direction: column;
`
export const GalImgWrap = styled.div`
width: 90%;
max-width: 1000px;
max-height:1000px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
margin-top:5vmax;

&>*{
    display: flex;
flex-direction: flex-start;
align-items: center;
justify-content: center;
height:600px;
width:100%;
padding:20px;
}
&:hover>*{
    opacity:.2;
}

`
export const Overlay = styled.div`
transition: .5s ease;
opacity: 0;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
text-align: center;
`
export const GalCol1 = styled.div`
&>*{
    height: 400px;
    margin: auto;
    margin-top: -20px;
    margin-right: -950px;
transform: rotate(-2deg);
}

`
export const GalCol2 = styled.div`
&>*{
    height: 400px;
    margin: auto;
    margin-top: 225px;
    margin-left: 700px;
    transform: rotate(-15deg);
    
}
&:hover>*{
    opacity:.8; 
    transform: scale(1);
    transition: .5s ease;

 }
`
export const GalCol3 = styled.div`&>*{
    height: 400px;
    margin: auto;
    margin-top: 250px;
    margin-right: -200px;
    transform: rotate(0);
    z-index:5;
}
&:hover>*{
    opacity:.8; 
    transition: .5s ease;
 }

`
export const GalCol4 = styled.div`&>*{
    height: 400px;
    margin: auto;
    margin-top: 20px;
    margin-right: 800px;
    transform: rotate(10deg);
}
&:hover>* {
    opacity:.2; 
    transition: .5s ease;
 }
&:hover>* .overlay{
    opacity:1; 
    transition: .5s ease;
 }
`


export const GalBtn = styled(LinkR)`
margin-top: 60px;
    color: var(--light-color);
    font-size: var(--h3-font-size);
    background: transparent;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    margin-bottom:20px;
    &:hover{
        color: var(--primary-color);  
        
    }
`
export const Arrow = styled(ArrowRight)`
color: var(--primary-color);
margin-top:2rem;

`