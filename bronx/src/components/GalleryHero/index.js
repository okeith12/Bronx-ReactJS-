import React from 'react'
import {GalHeroSection,GalHeroContainer,GalVid,GalVideo,GalText} from './[SC]GalleryHero'
import video from '../../images/bronx_video_05.mp4';
const GalleryHero = () => {
    return (
        <>
          <GalHeroSection>
              <GalHeroContainer>
          
              <GalVid>
                <GalVideo autoPlay muted loop src={video} alt="VIDEO" type='video/mp4'/>
              </GalVid>
              <GalText>Gallery</GalText>
              </GalHeroContainer>
            
        </GalHeroSection>  
        </>
    )
}

export default GalleryHero
