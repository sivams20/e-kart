import React from "react";
import logo from '../images/ekart_logo.png';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    padding: 10px 20px;
`

const Logo = styled.img`
    width: 100px;
    height: 60px;
`

function Header(){
    return(
        <HeaderWrapper>
            <Logo src={logo} alt="My logo" />
        </HeaderWrapper>
    )
}

export default Header;
