import React, { useContext, useState } from "react";
import { FilterContext } from "../../Contexts/FilterContext";
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

function Slider(){
    const {slider, color} = useContext(FilterContext);
    const [min, setMin] = useState(10);
    const [max, setMax] = useState(10000);
    
    return(
        <SliderWrapper>
            <SliderRange>
                Price Range 0 - {slider.rangeval ? slider.rangeval : min}
            </SliderRange>
            {/* <div class="range-wrap"> */}
                <SliderInput type="range" className="range" min={min} max={max} onChange={(event) => slider.setRangeval(event.target.value)} />
            {/* </div> */}
        </SliderWrapper>
    )
}

export default Slider;
