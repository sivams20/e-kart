import React, { useCallback, useContext, useState } from "react";
import styled from 'styled-components';
import { FilterContext } from "../Contexts/FilterContext";
import Color from "./Color/Color";
import Slider from "./Slider/Slider";

const FilterWrapper = styled.div`
    flex: 25%;
    border: 1px solid grey;
`

function Filters(){
    console.log('Filters');

    const {slider, color} = useContext(FilterContext);
    const [min, setMin] = useState(10);
    const [max, setMax] = useState(10000);
    const [sliderValue, setSliderValue] = useState(10);
    const [colorSelected, setColorSelected] = useState('');

    const sliderHandler = useCallback((data) =>{
        console.log(data);
        setSliderValue(data);
    }, [sliderValue]);

    const colorHandler = useCallback((data) =>{
        console.log(data);
        setColorSelected(data);
    }, [colorSelected]);

    const onApply = () => {
        console.log(colorSelected);
        console.log(max);
        slider.setRangeval(500);
    }

    return(
        <FilterWrapper>
            <Slider min={min} max={max} sliderValue={sliderValue} sliderChange={sliderHandler} />
            <Color colorSelected={colorSelected} colorChange={colorHandler} />
            <button onClick={onApply}>Apply</button>
        </FilterWrapper>
    )
}

export default React.memo(Filters);
