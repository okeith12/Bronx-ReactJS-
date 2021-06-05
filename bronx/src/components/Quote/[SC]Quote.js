import styled from 'styled-components';
import { GallerySumContainer } from '../GallerySummary/[SC]GallerySummary';
import { SummaryWrapper } from '../summary/[SC]summary';


export const QuoteContainer = styled(GallerySumContainer)`
background: none;
min-height: 100vh;
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

}
/* horizontal line */
&::before {
content:'';
position: absolute;
background-color:var(--primary-color);
width: 20%;
height: 3px;
bottom: 0;
right:-10%;

}
`

export const QuoteBox = styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 1205px;
height: 822px;
position:absolute;
margin-top:10vmax;

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

}


`

export const QuoteText = styled.h1`
font-size: 48px;
font-family: Lora;
line-height: 60px;
text-align:center;
height:200px;
width:80%;
`