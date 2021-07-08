import React from 'react'
import styled from 'styled-components'
import abt01 from '../images/bambina_about.jpg';
import abt02 from '../images/bruno_about.jpg';
import abt03 from '../images/thor_about.jpg';


const DogSection = ({img,alt,name}) => {
    return (
        <>
            <SectionDog>
                <DogSectionTitle>Legends never die</DogSectionTitle>
                <DogSectionTitle>..They Live through Us</DogSectionTitle>
                <DogContainer>
                    <DogCard>
                        <DogImage src={abt01}>
                        </DogImage>
                        <DogData>   <DogDataTitle>BAMBINA</DogDataTitle>
                    <DogDesc>SHE GAINED YOUR HEARt</DogDesc></DogData>
                    </DogCard>
                    <DogCard>
                        <DogImage src={abt02}>
                        </DogImage>
                        <DogData>   <DogDataTitle>BRUNO</DogDataTitle>
                    <DogDesc>He GAINED YOUR SMILE</DogDesc></DogData>
                    </DogCard>
                    <DogCard>
                        <DogImage src={abt03}>
                        </DogImage>
                        <DogData>   <DogDataTitle>THOR</DogDataTitle>
                    <DogDesc>HE GAINED YOUR SOUL</DogDesc></DogData>
                    </DogCard>
                </DogContainer>
            </SectionDog>
        </>
    )
}

export default DogSection

const SectionDog = styled.section`
display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  margin-top: 10vh;
  margin-bottom: 20vh;
  @media (max-width: 800px){
    height: 100%;
  }
`
const DogSectionTitle = styled.h1`
    font-size: var(--h1-font-size);
    margin-bottom: 1rem;
  text-align: center;
  color: var(--primary-color);
  `
const DogContainer = styled.div`
display: flex;
justify-content: center;
overflow: visible;
width: 90%;
@media (max-width: 800px){
    flex-wrap: wrap;
  }
  @media (max-width: 500px){
    width: 100%;
  }
`
const DogWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-items:center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 868px){
        grid-template-columns: 1fr;
    }
`
const DogCard = styled.div`
margin: 1rem;
  height: 450px;
  width: 300px;
  border-radius: 4px;
  position: relative;
  justify-content: center;
align-items:center;
  @media (max-width: 500px){
    max-width: 100%;
    width: 50vh;
    min-height: auto;
    background-position: center;
  }
`
const DogImage = styled.img`
height: 100%;
max-width:100%;
position: absolute;
border-radius:10px;
filter: brightness(70%);
transition: 0.4s cubic-bezier(0.075,0.82,0.165,1);
&:hover{
    transform: scale(1.1);
}
justify-content: center;
align-items:center;
`
const DogData = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
padding 0 2rem;
`
const DogDataTitle = styled.h1`
position: absolute;
top: 350px;
left: 40px;
color: var(--light-color);
letter-spacing: 2px;
`
const DogDesc = styled.p`
position: absolute;
  top: 400px;
  left: 40px;
  text-align:center;
  color: var(--light-color);
`
