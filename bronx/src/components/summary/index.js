import React from 'react'
import {SummaryContainer,SummaryWrapper,PrimaryBtn,Col1,Col2,TextWrapper,ImgWrap,Title,Desc,BtnWrap,Image,ArrowRight} from './[SC]summary';
import aboutImg from '../../images/home_about_bronx.jpg'
const Summary = () => {
    return (
        <>
           <SummaryContainer>
            <SummaryWrapper>
                    <Col1>
                    <ImgWrap><Image src={aboutImg}/></ImgWrap>
                  
                    </Col1>
                    <Col2>
                    <TextWrapper>
                        <Title>The Love of our Lives</Title>
                        <Desc>Bronx was the embodiment of pure love. He loved each and every one of us with every fiber of his being, as we did him. He absolutely loved to cuddle and be cuddled. He never denied giving and receiving kisses even when he was fast asleep. He had the sweetest face and the most beautiful eyes that were impossible to say no to. As big as he was, he was extremely sensitive and needed constant love and affection....</Desc>
                        <BtnWrap>
                            <PrimaryBtn to='/about'>Read More<ArrowRight/></PrimaryBtn>
                        </BtnWrap>
                    </TextWrapper>
                    </Col2>
            </SummaryWrapper>
            
            </SummaryContainer> 
        </>
    )
}

export default Summary
