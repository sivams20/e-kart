import React from "react";
import styled from 'styled-components';
import Color from "./Color/Color";
import Slider from "./Slider/Slider";

const FilterWrapper = styled.div`
    flex: 25%;
    border: 1px solid grey;
`

function Filters(){
    return(
        <FilterWrapper>
            <Slider />
            <Color/>
        </FilterWrapper>
    )
}

export default Filters;
