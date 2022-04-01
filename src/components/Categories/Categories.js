import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import Category from "./Category/Category";

// const categories = [
//     {'id': 1, 'title': 'Grocery'}, 
//     {'id': 2, 'title': 'Electronics'},
//     {'id': 3, 'title': 'Mobile'},
//     {'id': 4, 'title': 'Beauty'}
//     ];

const ListContainer = styled.div`
    /* display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: center; */
`
function Categories(){
    const [categories, setCategory] = useState([]);
    useEffect(() => {
        axios.get(`https://run.mocky.io/v3/53b81783-799b-4348-b97b-f79665b882f1`)
        .then(res => {
            //console.log(res.data);
            const catData = [
                {'id': 1, 'title': 'Grocery'}, 
                {'id': 2, 'title': 'Electronics'},
                {'id': 3, 'title': 'Mobile'},
                {'id': 4, 'title': 'Beauty'}
                ];
            //console.log(catData);
            setCategory(catData);
        })
        .catch(error => {
            console.log(error);
        })
    },[])

    //const category = categories.length > 0 && categories.map(post=>(<Category key={post.id} value={post.title} />))

    return(
    <ListContainer>
        <Category categories={categories} />
        {/* {category} */}
        {/* {list.map(post => <div key={post.id}>{post.title}</div>)} */}
        {/* {list.map(post => <Category key={post.id}>{post.title}</Category>)} */}
        {/* {list.map(function(item) {
          return <Category key={item.id} value={item.title}>{item.title}</Category>;
        })} */}

        {/* {categories.length && categories.map(function(item) {
            <div key={item.id}>{item.title}</div>;
        })} */}

        {/* {categories.length > 0 && categories.map(category => (<div key={category.id}>{category.title}</div>))} */}
        {/* {categories.length > 0 && categories.map(category => (<Category key={category.id}>{category.title}</Category>))} */}
    </ListContainer>
    )
}

export default Categories;
