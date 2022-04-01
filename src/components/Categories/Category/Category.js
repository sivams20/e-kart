import React from "react";
import styled from 'styled-components';

const ListItem = styled.div`
    /* flex-grow: 1;
    border: 1px solid grey;
    height: 100px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    //height: 100px;
    border: 1px solid green;
    > div {
    flex-grow: 1;
    //flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    height: 100px;
  }
`

function Category(props){
    console.log(props);
    //const categories = props.categories? JSON.parse(props.categories) : '';
    return(
        <ListItem>
           {props.categories.length && props.categories.map(category => <div key={category.id}>{category.title}</div>)}
        </ListItem>
    )
}

export default Category;
