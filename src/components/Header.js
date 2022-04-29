import React, { useContext, useState } from "react";
import logo from '../images/ekart_logo.png';
import styled from 'styled-components';
import Login from "./Modals/Login";
import AppContext from "./Contexts/context";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid grey;
    padding: 5px 20px;
`

const Logo = styled.img`
    width: 100px;
    height: 50px;
`

const ActionBar = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`

function Header(){
    const {isUserLoggedIn} = useContext(AppContext);
    const user = localStorage.getItem('kartUser');
    console.log('IsLoggedIn',isUserLoggedIn);
    const [modal, setModal] = useState(false);
    const login = () =>{
        setModal(true);
    }

    const close = () =>{
        setModal(false);
    }

    return(
        <HeaderWrapper>
            <Logo src={logo} alt="My logo" />
            <ActionBar>
                <span>Wishlist</span>
                <span>Cart</span>
                {isUserLoggedIn ? <span>{user}</span> : <button onClick={login}>Login</button>}
                <Login show={modal} close={close} />
            </ActionBar>
        </HeaderWrapper>
    )
}

export default Header;
