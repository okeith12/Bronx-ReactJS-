import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {IoArrowForwardSharp } from "react-icons/io5";

export const SummaryContainer= styled.div`
color: #fff;
margin-top: 10vh;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-bottom:10vh;
@media screen and (max-width: 768px){
    margin-top: 8vmax;
    margin-bottom: 5vmax;
}
`
export const SummaryWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
height: 100%;
width: 90%;
max-width: 1200px;


@media screen and (max-width: 768px){
    flex-direction: column;
    width: 90%;

}
`
export const Col1 = styled.div`
width: 45%;

@media screen and (max-width: 768px){
    width: 80%;
    height: 400px;
}
@media screen and (max-width: 500px){
    width:90%;
}

`
export const Col2 = styled.div`

background: var(--accent-color);
box-shadow: 0 3px 5px rgba(0,0,0,0.2);
width: 40%;
height: 700px;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
margin-left: -80px;
z-index: 2;
color: var(--light-color);
transform: rotate(8deg);
margin-top: 10px;



@media screen and (max-width: 768px){
    width: 65%;
    height: 400px;
    margin: auto;
    margin-top: 80px;
    transform: rotate(0deg);
   
}
@media screen and (max-width: 500px){
    width:90%;
    margin: auto;
    margin-top: -100px;
}
@media screen and (max-width: 374px) {
    height: 300px;
    margin-top: -160px;
  }
`
export const TextWrapper = styled.div`
max-width: 100%;
padding: 20px;
`
export const Title = styled.h1`
display: flex;
justify-content: center;

font-size: var(--h1-font-size);
line-height: 16px;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: var(--mb-4);


@media screen and (max-width: 350px) {
    margin-bottom: var(--mb-1);
  }
`
export const Desc = styled.p`
justify-content: center;
margin-top: var(--mb-4);
align-items: center;
font-family: 'Lora', serif;
font-size: var(--h3-font-size);
padding: 20px;
@media screen and (max-width: 350px) {
    margin-top: var(--mb-1);
    font-size: .7rem;
  }
`
export const BtnWrap = styled.div`
display: flex;
justify-content: center;
font-size: 17px;
line-height: 24px;
&:hover > *{
    color: var(--primary-color);  
    
}
`

export const PrimaryBtn = styled(LinkR)`
margin-top: var(--mb-2);
    color: var(--light-color);
    font-size: var(--h3-font-size);
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    line-height: 20px;
    cursor: pointer;
    text-decoration: none;

    @media screen and (max-width: 500px){
        margin-top: -.5rem;
    }



`
export const ArrowRight = styled(IoArrowForwardSharp)`
color: var(--primary-color);
margin-left: var(--mb-1);

`
export const ImgWrap = styled.div`
padding-left: 20px;
`
export const Image = styled.img`
width: 100%;
height: 100%;
`