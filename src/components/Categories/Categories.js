import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import Category from "./Category/Category";

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100px;
    padding: 20px;
`
function Categories(){
    console.log('Categories component');
    const [categories, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5000/categories')
        .then(res => {
            setCategory(res.data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        })
    },[])

    return(
    <ListContainer>
            {
                loading === true ? 
                <div> Loading... </div> :
                <React.Fragment> 
                    {categories.map(category => <Category key={category._id} category={category}></Category>)}
                </React.Fragment>
            }
    </ListContainer>
    )
}

export default React.memo(Categories);
