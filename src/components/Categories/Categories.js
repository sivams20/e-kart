import React from "react";
import styled from 'styled-components';
import Category from "./Category/Category";

const list = ['Category1', 'Category2', 'Category3', 'Category4'];
const ListContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: center;
    //height: 100px;
`

function Categories(){
    return(
    <ListContainer>
        {list.map(function(item) {
          return <Category key={item} value={item}>{item}</Category>;
        })}
    </ListContainer>
    )
}

export default Categories;
