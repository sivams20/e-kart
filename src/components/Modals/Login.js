import React from "react";
import styled from 'styled-components';
import ReactDom from 'react-dom';

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
    background-color: #f7f7f7;
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

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Submit = styled.button`
    width: 100px;
    align-self: center;
`

function Login({show, close}){

    const submit = () =>{
        console.log('submit');
    }

    return ReactDom.createPortal(<div>
        {
            show ? 
            <ModalContainer>
                <Modal>
                    <ModalHeader>
                        <h2>Login</h2>
                    </ModalHeader>
                    <ModalContent>
                        <FormWrapper>
                            <label htmlFor="email">Email: </label>
                            <input type="text" placeholder="Enter email" name="email" />
                            <label htmlFor="password">Password: </label>
                            <input type="password" placeholder="Enter password" name="password" />
                        </FormWrapper>
                    </ModalContent>
                    <Footer>
                        <Button onClick={close}>cancel</Button>
                        <Button onClick={submit}>submit</Button>
                    </Footer>
                </Modal>
            </ModalContainer>
            : null
        }
    </div>, document.getElementById("modal")
    )
}

export default Login;
