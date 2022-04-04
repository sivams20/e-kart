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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100px;
    padding: 20px;
`
function Categories(){
    const [categories, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //axios.get('https://run.mocky.io/v3/354d5cde-42d2-44d4-a644-b49acac192a3')
        axios.get('localhost:5000/categories')
        //axios.get('localhost:5000/orders')
        .then(res => {
            console.log(res.data);
            setCategory(res.data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        })
    },[])

    //const category = categories.length > 0 && categories.map(post=>(<Category key={post.id} value={post.title} />))

    return(
    <ListContainer>
            {
                loading === true ? 
                <div> Loading... </div> :
                <React.Fragment> 
                    {categories.map(category => <Category key={category.id} category={category}></Category>)}
                </React.Fragment>
            }
        {/* <Category categories={categories} /> */}
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
