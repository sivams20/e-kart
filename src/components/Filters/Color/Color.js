import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import { FilterContext } from "../../Contexts/FilterContext";

const ColorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px 20px 10px;
    border-bottom: 1px solid grey;
`



function Color(){
    const [colors, setColors] = useState([]);
    const handleCheckboxState = (color) =>{
        console.log(color);
    }
    useEffect(()=>{
        axios.get('https://run.mocky.io/v3/b1563809-b2af-4db2-a2b7-8de974c42c04')
        .then(response => {
            setColors(response.data);
        })
        .catch(error => {

        })
        .finally()
    },[])

    const {slider, color} = useContext(FilterContext);
    console.log(color);
    return(
        <ColorWrapper>
            <div>Color</div>
            {colors.map(color => <label key={color.id}>
                <input type="checkbox" checked={color.isChecked} name="color" value={color.id}  onChange={() => handleCheckboxState(color)} /> 
                    {color.name}
                </label>)
            }
        </ColorWrapper>
    )
}

export default Color;
