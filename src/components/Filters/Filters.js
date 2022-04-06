import React from "react";
import styled from 'styled-components';
import Slider from "./Slider/Slider";

const FilterWrapper = styled.div`
    flex: 25%;
`

function Filters(){
    return(
        <FilterWrapper>
            Filters
            <Slider />
        </FilterWrapper>
    )
}

export default Filters;
