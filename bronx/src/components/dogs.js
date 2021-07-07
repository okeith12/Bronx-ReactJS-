import React from 'react'
import styled from 'styled-components'
import hero01 from '../images/bronx_gal_27.jpg';


const DogSectionTitle = styled.h1`

  `
const DogContainer = styled.div`
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
background: #010606;
`
const DogWrapper = styled.div`
    max-width:300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    align-items: center;
    grid-gap:16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
const DogCard = styled.div`
background: #ffff;
display: flex;
flex-direction: flex-start;
align-items:center;
border-radius: 10px;
max-height: 500px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
`
const DogImage = styled.img`
transition: .3s ease in;
max-width: 300px;
height: 450px;
&:hover{
    transform: scale(1.1);
}


`
const DogData = styled.div`
position: absolute;
    top: 350px;
    left: 40px;

`
const DogDataTitle = styled.h1`

`
const DogDesc = styled.p`

`



const DogSection = () => {
    return (
        <>
            <DogContainer>
                <DogSectionTitle>
                    DOGS LIVING LARGE
                </DogSectionTitle>
                <DogWrapper>
                    
                        <DogCard>
                            <DogImage src={hero01} alt=''></DogImage>
                            <DogData>
                                <DogDataTitle>DOGS</DogDataTitle>
                                <DogDesc>Dogs are lvnig alrge</DogDesc>
                            </DogData>
                        </DogCard>
                        <DogCard>
                            <DogImage src={hero01} alt=''></DogImage>
                            <DogData>
                                <DogDataTitle>SDA</DogDataTitle>
                                <DogDesc>fdsfgdfgdgfgf</DogDesc>
                            </DogData>
                        </DogCard>
                        <DogCard>
                            <DogImage src={hero01} alt=''></DogImage>
                            <DogData>
                                <DogDataTitle>dfg</DogDataTitle>
                                <DogDesc>fdgdfgdfgfgfdg</DogDesc>
                            </DogData>
                        </DogCard>
                        </DogWrapper>
               
            </DogContainer>
        </>
    )
}

export default DogSection
