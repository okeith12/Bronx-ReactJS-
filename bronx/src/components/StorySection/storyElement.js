import styled from 'styled-components';
import hero01 from '../../images/hero_01.jpg';
import  { storySectionOne, storySectionThree } from './Data';


export const StoryContainer = styled.div`
margin-top:${({isFirst}) => (isFirst ? '-80px' : '0')};
margin-bottom: 10vh;

${({picBg}) => {
    if(picBg && storySectionOne.story !== 3){
        return `
        background: url(${storySectionOne.bgImg2}) center center/cover no-repeat;
        `
    }
    else if(picBg && storySectionThree.story === 3){
        return`
        background: url(${storySectionThree.bgImg2}) center center/cover no-repeat;
        `
    }
    else{
        return`
        background: transparent;
        `
    }
}}

@media screen and (max-width: 768px){
    padding: 7rem 0 2rem;
}

`

export const StoryOverlay = styled.div`

display:block;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
z-index: 2;
cursor: pointer;
`
export const StoryWrapper = styled.div`
display:grid;
z-index: 1;
height:100vh;
width: 100%;
max-width:1100px;
margin-right: auto;
margin-left:auto;
padding: 0 24px;
justify-content:center;
`

export const StoryGrid = styled.div`
    display:grid;
    align-items:center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'img cont'` : `'cont img'`)};
    grid-template-columns: ${({picBg}) => (picBg ? '1fr' : '(2,1fr)')};
    @media screen and (max-width: 500px){
    
        grid-template-areas: ${({imgStart}) => (imgStart ? `'cont' 'img'` : `'cont cont' 'img img' `)};
        
    }
    
`
export const StoryData = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: cont;
align-items: center;
`
export const TextWrapper = styled.div`
max-width:540px;
padding-top: 0;
padding-bottom: 60px;
margin-top:${({isFirst}) => (isFirst? '0' : '200px')};


`
export const StoryTitle = styled.h1`
margin-bottom: 24px;
font-size: var(--h1-font-size);
line-height:1.1;
color:${({darkTitle}) => (darkTitle ? 'var(--light-color)' : 'var(--primary-color)')};
text-align: center;
text-transform: capitalize;


`
export const StoryDesc = styled.p`
margin-bottom: 35px;
max-width:440px;
font-size: var(--h3-font-size);
line-height:24px;
color:${({darkDesc}) => (darkDesc ? 'var(--light-color)' : 'var(--accent-color)')};
`
export const StoryImg= styled.div`
display:${({hasImg}) => (hasImg ? 'inline' : 'none')};
grid-area:img;
margin-bottom: 15px;
padding: 0 15px;
align-items: center;
justify-content: center;
`
export const StoryImgOverlay = styled.div`
overflow:hidden;
max-width: 555px;
height:100%;
`
export const StoryImage = styled.img`
width:90%;
margin 0 0 10px 0;
padding-right: 0;
align-items:center;
&:hover{
    transform: scale(1.1);
    transition: 0.4s ease-in;
}
@media screen and (max-width:768px){
    
}
@media screen and (max-width:500px){
    width:80%; 
}
`


