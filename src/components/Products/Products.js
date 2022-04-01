import React from "react";
import styled from 'styled-components';
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
    return(
        <ProductsWrapper>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </ProductsWrapper>
    )
}

export default Products;
