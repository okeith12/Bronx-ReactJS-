import React from 'react';
import pic1 from '../../images/bronx_home_gal_01.jpg'
import pic2 from '../../images/bronx_home_gal_02.jpg'
import pic3 from '../../images/bronx_home_gal_03.jpg'
import pic4 from '../../images/bronx_home_gal_04.jpg'
import {GallerySumContainer,GalImgWrap,GalCol1,GalCol2,GalCol4,GalCol3, GalBtn,Arrow,Overlay} from './[SC]GallerySummary';

const GallerySummary = () => {
    return (
        <GallerySumContainer id='gallery'>
            <GalImgWrap>
               <GalCol1><img src={pic1} alt=""/></GalCol1> 
               <GalCol2><img src={pic2} alt=""/></GalCol2> 
               <GalCol3><img src={pic3} alt=""/></GalCol3> 
               <GalCol4><img src={pic4} alt=""/></GalCol4> 
               <Overlay className="overlay"/>
            </GalImgWrap>
            <GalBtn to='/gallery'>View More<Arrow/></GalBtn>
        </GallerySumContainer>
    )
}

export default GallerySummary
