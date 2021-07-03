import styled from 'styled-components';

export const StoryContainer = styled.div`
background:${({picBg}) => (picBg ? '#f9f9f9' : 'transparent')};

@media screen and (max-width: 768px){
    padding: 7rem 0 2rem;
}

`

export const StoryWrapper = styled.div`
display:grid;
z-index: 1;
height:80vh;
width: 100%;
max-width:1100px;
margin-right: auto;
margin-left:auto;
padding: 0 24px;
justify-content:center;
`
export const StoryGrid = styled.div`
    display:${({hasImg}) => (hasImg ? 'grid' : 'flex')};
    grid-auto-columns: minmax(auto,1fr);
    align-items:center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'img cont'` : `'cont img'`)};

    @media screen and (max-width: 768px){
    
        grid-template-areas: ${({imgStart}) => (imgStart ? `'cont' 'img'` : `'cont cont' 'img img' `)};
    }
`
export const StoryData = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: cont;

`
export const TextWrapper = styled.div`
max-width:540px;
padding-top: 0;
padding-bottom: 60px;
`
export const StoryTitle = styled.h1`
margin-bottom: 24px;
font-size: var(--h1-font-size);
line-height:1.1;
color:${({darkTitle}) => (darkTitle ? 'red' : 'black')};
text-align: center;
text-transform: capitalize;


`
export const StoryDesc = styled.p`
margin-bottom: 35px;
max-width:440px;
font-size: var(--h3-font-size);
line-height:24px;
color:${({darkDesc}) => (darkDesc ? 'var(--light-color)' : 'black')};

`
export const StoryImg= styled.div`
// display:${({hasImg}) => (hasImg ? 'none' : 'inline')};
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
width:300px;
margin 0 0 10px 0;
padding-right: 0;
`

