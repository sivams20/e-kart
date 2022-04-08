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
    console.log('Color Component');
    const {slider, color} = useContext(FilterContext);
    const [colors, setColors] = useState([]);
    const colorCodes = [];
    const handleCheckboxState = (data) =>{
         if(data.isChecked){
            colorCodes = colorCodes.filter(item => item != data.id);
         }else{
            colorCodes.push(data.id);
        }
        colors.find(item => item.id === data.id).isChecked = !data.isChecked;
        setColors(colors);
        color.setcolorCodes(colorCodes);
    }
    useEffect(()=>{
        axios.get('https://run.mocky.io/v3/fdbe3884-b824-466c-8da4-0d0ecad17e7c')
        .then(response => {
            setColors(response.data);
        })
        .catch(error => {

        })
        .finally()
    },[])

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
