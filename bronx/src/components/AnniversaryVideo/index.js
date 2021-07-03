import React from 'react'
import video from '../../images/testvideo.mp4';
import {VideoSection,VideoTitle,VideoContainer,VideoContent,VideoDesc,AnnVideo,VideoIcon,VideoButton} from './annVideo';


    const AnniversaryVideo = () => {
       



    return (
        <>
            <VideoSection>
                <VideoTitle></VideoTitle>
            <VideoContainer>
                <VideoDesc>
                    fgdfgfg
                </VideoDesc>
                <VideoContent>
                <AnnVideo 
               src={video} alt="VIDEO" 
               controls = {true}
                type='video/mp4'/>
                <VideoButton >
                    <VideoIcon></VideoIcon>
                </VideoButton>
                </VideoContent>
            </VideoContainer>
            </VideoSection>
            
        </>
    )
}

export default AnniversaryVideo
