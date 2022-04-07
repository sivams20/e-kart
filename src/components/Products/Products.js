import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import { FilterContext } from "../Contexts/FilterContext";
import Product from "./Product/Product";

const ProductsWrapper = styled.div`
    flex: 75%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
`

function Products(){
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const value = useContext(FilterContext);
    console.log(value);
    useEffect(() => {
        axios.get('https://run.mocky.io/v3/ace59d18-981c-431e-ae56-5d2f37e2ab10')
        .then(response => {
            setProduct(response.data);
        })
        .catch(error => {
            
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    return(
        <ProductsWrapper>
            {
                loading === true ? 
                <div> Loading... </div> :
                <React.Fragment> 
                    {products.map( product => <Product key={product.id} product={product}></Product>)}
                </React.Fragment>
            }
        </ProductsWrapper>
    )
}

export default Products;
