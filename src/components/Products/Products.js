import React, { useContext } from "react";
import styled from 'styled-components';
import AppContext from "../Contexts/context";
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
    const { products } = useContext(AppContext);
    console.log(products);

    return(
        <ProductsWrapper>
            {
                <React.Fragment> 
                    {products.map( product => <Product key={product.id} product={product}></Product>)}
                </React.Fragment>
            }
        </ProductsWrapper>
    )
}

export default Products;
