import React from 'react'
import {StoryContainer,TextWrapper,StoryImage,StoryImgOverlay,StoryWrapper,StoryImg,StoryGrid,StoryData,StoryTitle,StoryDesc} from "./storyElement";
import img from '../../images/bronx_gal_27.jpg';

const StorySection = (hasImg,bgImg,id,picBg,imgStart,storyTitle,storyDesc,darkTitle,darkDesc) => {
    return (
        <>
            <StoryContainer id={id} picBg={picBg}>
                <StoryWrapper >
                    <StoryGrid imgStart={imgStart}>
                        <StoryData>
                            <TextWrapper>
                            <StoryTitle darkTitle={darkTitle}>fggdfg</StoryTitle>
                            <StoryDesc darkDesc={darkDesc}>fdgdfgdfgfd</StoryDesc>
                            </TextWrapper>
                           
                        </StoryData>
                    </StoryGrid>
                </StoryWrapper>
                <StoryImg hasImg={hasImg}>
                    <StoryImgOverlay>
                        <StoryImage src={bgImg} alt="dog"></StoryImage>
                    </StoryImgOverlay>
                </StoryImg>
                
            
            </StoryContainer>
            


        </>
    )
}

export default StorySection
