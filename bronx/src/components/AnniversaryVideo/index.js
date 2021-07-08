import React from 'react'
import video from '../../images/1080p.mp4';
import {VideoSection,VideoTitle,VideoContainer,VideoContent,VideoDesc,AnnVideo} from './annVideo';


    const AnniversaryVideo = () => {
       



    return (
        <>
            <VideoSection>
                <VideoTitle>Life In Motion</VideoTitle>
            <VideoContainer>
                <VideoDesc>
                    One Year Anniversary
                </VideoDesc>
                <VideoContent>
                <AnnVideo 
               src={video} alt="VIDEO" 
               pip={true}
               width='960px'
               controls = {true}
                type='video/mp4'/>
                </VideoContent>
            </VideoContainer>
            </VideoSection>
            
        </>
    )
}

export default AnniversaryVideo
