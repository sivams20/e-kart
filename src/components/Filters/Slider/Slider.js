import React, { useState } from "react";
import styled from 'styled-components';

const SliderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px 20px 10px;
    border-bottom: 1px solid grey;
`
const SliderInput = styled.input`
    width: 100%;
`

const SliderRange = styled.div`
    margin: 20px 0px 20px 0px;
`

function Slider(props){
    console.log('Slider component')
    const onSliderChange = (data) => {
        console.log('onSliderChange');
        props.sliderChange(data);
    }
    
    return(
        <SliderWrapper>
            <SliderRange>
                Price Range 0 - {props.sliderValue ? props.sliderValue : props.min}
            </SliderRange>
                <SliderInput type="range" className="range" min={props.min} max={props.max} onChange={(event) => onSliderChange(event.target.value)} />
        </SliderWrapper>
    )
}

export default React.memo(Slider);
