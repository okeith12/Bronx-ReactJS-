import hero1 from '../images/hero_01.jpg'
import hero2 from '../images/hero_02.jpg'
import hero3 from '../images/hero_03.jpg'

export const HeroImageData = [
{
    image: hero1
},
{
    image:hero2
},
{
    image:hero3
},

];

export default function HeroSlider(){
    return <Slider slides={HeroImageData} />
}