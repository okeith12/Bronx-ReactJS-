import React from 'react'
import {StoryContainer,TextWrapper,StoryImage,StoryImgOverlay,StoryWrapper,StoryImg,StoryGrid,StoryData,StoryTitle,StoryDesc} from "./storyElement";



const StorySection = ({hasImg,bgImg,isFirst,id,picBg,imgStart,storyTitle,storyDesc,darkTitle,darkDesc,story}) => {
    return (
        <>
            <StoryContainer isFirst={isFirst} id={id} picBg={picBg} bgImg={bgImg}>
                z<StoryWrapper >
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
