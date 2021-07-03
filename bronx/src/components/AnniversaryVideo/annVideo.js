import styled from "styled-components";
import { IoCaretForwardSharp } from "react-icons/io5";


export const VideoSection = styled.section`
    height:100vh;
  padding: 4.5rem 0 2.5rem;
  @media screen and (min-width: 768px) {
    padding: 7rem 0 2rem;

  }
`
export const VideoTitle = styled.h1`
font-size: var(--h2-font-size);
color: var(--primary-color);
text-align: center;
text-transform: capitalize;
margin-bottom: var(--mb-2);
`
export const VideoContainer = styled.div`
// height:968px;
margin-left: var(--mb-1);
margin-right: var(--mb-1);
padding-bottom: 1rem;

@media screen and (max-width: 340px){
    padding: 0;
}
@media screen and (min-width: 568px) {
      display: grid;
      grid-template-columns: .6fr;
      justify-content: center;
    }
@media screen and (min-width: 1024px){
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: .7fr;
}
@media screen and (min-width: 1200px) {
  
      max-width: 1024px;
    }
`
export const VideoDesc = styled.p`
text-align: center;
margin-bottom: var(--mb-2);
@media screen and (min-width: 1024px){
    
    padding: 0 8rem;}

`
export const VideoContent = styled.div`
position: relative;
`
export const AnnVideo = styled.video`
max-width: 100%;
height: auto;
`
export const VideoButton = styled.button`
position: absolute;
right: 1rem;
bottom: -1rem;
padding: 1rem 1.5rem;
border: none;
cursor: pointer;
font-family: var(--body-font);
font-size: var(--normal-font-size);
`
export const VideoIcon = styled(IoCaretForwardSharp)`

font-size: 1.2rem;
`
