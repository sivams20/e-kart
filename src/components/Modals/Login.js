import React from "react";
import styled from 'styled-components';

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Modal = styled.div`
    background-color: rgba(255, 255, 255, 0.35);
    width: 500px;
    height: auto;
    padding: 10px;
    border-radius:20px;
`

const ModalHeader = styled.div`
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #dddddd;
`

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
    border-top: 1px solid #dddddd;
`

const Button = styled.button`
    padding: 3px;
    border-radius: 5px;
`

const ModalContent = styled.div`
    padding: 10px;
`

function Login({show}){
    return(
    <div>
        {
            show ? 
            <ModalContainer>
                <Modal>
                    <ModalHeader>
                        <h2>Modal Title</h2>
                    </ModalHeader>
                    <ModalContent>
                        Modal Content
                    </ModalContent>
                    <Footer>
                        <Button>cancel</Button>
                        <Button>submit</Button>
                    </Footer>
                </Modal>
            </ModalContainer>
            : null
        }
    </div>
    )
}

export default Login;
