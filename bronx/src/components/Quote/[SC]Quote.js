import styled from 'styled-components';
import { GallerySumContainer } from '../GallerySummary/[SC]GallerySummary';
import { SummaryWrapper } from '../summary/[SC]summary';


export const QuoteContainer = styled(GallerySumContainer)`
background: transparent;
min-height: 100vh;
margin-bottom: 10vmax;
@media screen and (max-width:768px){
  min-height: 70vh;
}
@media screen and (max-width:500px){
  min-height: 100vh;
}
`
export const QuoteWrapper = styled(SummaryWrapper)`
position:absolute;

&::after{
content:'';
position: absolute;
background-color: var(--primary-color);
width: 3px;
height: 30%;
bottom: 0;
right:-10%;
@media screen and (max-width:768px){
  right:5%;
  bottom: 15%;
  height: 15%;
}
@media screen and (max-width:500px){
  bottom: 5%;
  
}
@media screen and (max-width:400px){
  bottom: 15%;
}
@media screen and (max-width:350px){
  bottom: 10%;

}
}

&::before {
content:'';
position: absolute;
background-color:var(--primary-color);
width:20%;
height: 3px;
bottom: 0;
right:-10%;
@media screen and (max-width:768px){
  width:15%;
  right:5%;
  bottom: 15%;
}
@media screen and (max-width:500px){
  bottom: 5%;
  width:22%;
}
@media screen and (max-width:400px){
  bottom: 15%;
  width:30%;
}
@media screen and (max-width:350px){
  bottom: 10%;

}
}
`

export const QuoteBox = styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 1205px;
height: 100%;

position:absolute;
margin-top:10vmax;
@media screen and (max-width:768px){
  width:75%;
  height: 50%;
  margin-top:3vmax;
}
@media screen and (max-width:500px){
 margin-top:-3rem;
}
@media screen and (max-width:400px){
  margin-top:-5rem;
 }
&::after{
    content:'';
    position: absolute;
    background-color: var(--primary-color);
    width: 3px;
    height: 30%;
    top: 8%;
    left:-10%;
   
}

&::before{
    content:'';
  position: absolute;
  background-color: var(--primary-color);
  width: 20%;
  height: 3px;
  top: 8%;
  left:-10%;
  @media screen and (max-width:500px){
    width: 30%; 
  }
  @media screen and (max-width:400px){
    width: 40%; 
  }
}


`

export const QuoteText = styled.h1`
font-size: 36px;
font-family: Lora;
line-height: 60px;
text-align:center;
height:200px;
width:80%;
opacity:.6;

@media screen and (max-width:768px){
  font-size:32px;
}
@media screen and (max-width:500px){
  font-size:24px;
}
@media screen and (max-width:400px){
  font-size:16px;
}
`