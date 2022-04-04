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

function Product(props){
    const product = props.product;
    return(
        <ProductDiv>
           {product.name}
        </ProductDiv>
    )
}

export default Product;
