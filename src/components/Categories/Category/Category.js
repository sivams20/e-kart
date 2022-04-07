import React from "react";
import styled from 'styled-components';

const CategoryDiv = styled.div`
    display: flex;
    flex-grow: 1;
    border: 1px solid grey;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
`

function Category(props){
    const category = props.category;
    return(
        <CategoryDiv>
            {category.name}
        </CategoryDiv>
    )
}

export default Category;
