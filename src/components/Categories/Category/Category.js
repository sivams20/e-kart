import React from "react";
import styled from 'styled-components';

const ListItem = styled.div`
    flex-grow: 1;
    border: 1px solid grey;
    height: 100px;
`

function Category(props){
    return(
        <ListItem>
           {props.value}
        </ListItem>
    )
}

export default Category;
