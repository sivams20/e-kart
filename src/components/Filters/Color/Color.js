import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ColorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px 20px 10px;
    border-bottom: 1px solid grey;
`
function Color(props){
    console.log('Color Component');
    const [colors, setColors] = useState([]);

    const onColorChange = (color) =>{
        console.log('onColorChange');
        props.colorChange(color);
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
            <select
                value={props.colorSelected}
                onChange={(e) => onColorChange(e.target.value)}>
                <option value="" key='all color'>All colors</option>
                {
                    colors &&
                      colors.map((color) => <option key={color.id} value={color.name}>{color.name}</option>)
                }
            </select>
        </ColorWrapper>
    )
}

export default React.memo(Color);
