import React from 'react'
import {StoryContainer,TextWrapper,StoryImage,StoryImgOverlay,StoryWrapper,StoryImg,StoryGrid,StoryData,StoryTitle,StoryDesc} from "./storyElement";


const StorySection = ({hasImg,bgImg,id,picBg,imgStart,storyTitle,storyDesc,darkTitle,darkDesc}) => {
    return (
        <>
            <StoryContainer id={id} picBg={picBg}>
                <StoryWrapper >
                    <StoryGrid imgStart={imgStart} hasImg={hasImg}>
                        <StoryData>
                            <TextWrapper>
                            <StoryTitle darkTitle={darkTitle}>{storyTitle}</StoryTitle>
                            <StoryDesc darkDesc={darkDesc}>{storyDesc}</StoryDesc>
                            </TextWrapper>
                           
                        </StoryData>
                        <StoryImg hasImg={hasImg}>
                    <StoryImgOverlay>
                        <StoryImage src={bgImg} alt="dog"></StoryImage>
                    </StoryImgOverlay>
                    
                </StoryImg>
                
                    </StoryGrid>
                </StoryWrapper>
               
            
            </StoryContainer>
            


        </>
    )
}

export default StorySection
