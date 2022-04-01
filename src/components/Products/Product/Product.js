import React from "react";
import styled from 'styled-components';

const ProductDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: grey;
`

function Product(){
    return(
        <ProductDiv>
            Individual product
        </ProductDiv>
    )
}

export default Product;
