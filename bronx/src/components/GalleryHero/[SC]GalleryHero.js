import styled from 'styled-components'
import { HeroContainer, HeroTitle } from '../Hero/[SC]Hero'


export const GalHeroSection = styled(HeroContainer)`
background:none;
margin-bottom:.5rem;
`

export const GalHeroContainer = styled.div`
width: 80%;
margin: auto;
overflow: hidden;

`
export const GalText = styled(HeroTitle)`
text-align: center;
top: 50%;
left: 50%;
position: absolute;
transform: translate(-50%, -50%);
animation: fade 0.4s ease-in;
`


export const GalVid = styled.div`
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 40%;
    opacity: 1;
`
export const GalVideo = styled.video`
width:100%;
height:100%;
opacity:0.8;
object-fit: cover;
`