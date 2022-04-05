import React from "react";
import styled from 'styled-components';

const CategoryDiv = styled.div`
    display: flex;
    flex-grow: 1;
    border: 1px solid grey;
    justify-content: center;
    align-items: center;
    height: 100px;
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid green;
    > div {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    height: 100px; */
  }
`

function Category(props){
    const category = props.category;
    //const categories = props.categories? JSON.parse(props.categories) : '';
    return(
        <CategoryDiv>
            {category.name}
           {/* {props.categories.length && props.categories.map(category => <div key={category.id}>{category.title}</div>)} */}
        </CategoryDiv>
    )
}

export default Category;
