import React from "react";
import styled from 'styled-components';

const ColorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px 20px 10px;
    border-bottom: 1px solid grey;
`
function Color(props){
    console.log('Color Component');
    console.log(props);

    const onColorChange = (color) =>{
        console.log('onColorChange');
        props.colorChange(color);
    }

    return(
        <ColorWrapper>
            <select
                value={props.colorSelected}
                onChange={(e) => onColorChange(e.target.value)}>
                <option value="" key='all color'>All colors</option>
                {
                    props.colors &&
                      props.colors.map((color) => <option key={color.id} value={color.name}>{color.name}</option>)
                }
            </select>
        </ColorWrapper>
    )
}

export default React.memo(Color);
