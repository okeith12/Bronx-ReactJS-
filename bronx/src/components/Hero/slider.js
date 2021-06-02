import React, {useState} from 'react';
import {SliderImg} from "./[SC]Hero";
import styled from 'styled-components';

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const next = () => {
        setCurrent(current===length - 1 ? 0 : current + 1);
    }
    const prev = () => {
        setCurrent(current===length - 1 ? 0 : current - 1);
    }

    return(
        <>
            <SlideWord onClick={next}>NEXT</SlideWord>
            <SlideNum>{current}/{length}</SlideNum>
            <SlideWord onClick={prev}>PREV</SlideWord>
            {slides.map((slide,index) => {
                return(
                    <div key={index}>
                        {index === current && (
                            <SliderImg src={slide.image}></SliderImg>
                        )}

                    </div>
                )
            })}

        </>
    )




}
export default Slider;

export const SlideWord = styled.h2`
    font-size: 20px;

`
export const SlideNum = styled.h2`
    font-size: 20px;

`