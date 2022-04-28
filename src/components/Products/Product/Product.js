import React, { useState } from "react";
import styled from 'styled-components';
import Login from "../../Modals/Login";

const ProductDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: grey;
`

function Product(props){
    const [modal, setModal] = useState(false);
    const addToCard = () =>{
        if(localStorage.getItem("kartUser")){
            return false;
        }else{
            setModal(!modal);
        }
    }

    const close = () =>{
        setModal(false);
    }
    const product = props.product;
    return(
        <ProductDiv>
            <div>Product image</div>
            <div>{product.name}</div>
            <div>Product Price</div>
            <div>Product Rating</div>
            <div><button>Add to Watchlist</button></div>
            <div><button onClick={addToCard}>Add to cart</button></div>
            <Login show={modal} close={close} />
        </ProductDiv>
    )
}

export default Product;
