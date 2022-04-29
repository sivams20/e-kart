import React, { useContext } from "react";
import styled from 'styled-components';
import ReactDom from 'react-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AppContext from "../Contexts/context";

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

const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Submit = styled.button`
    width: 100px;
    align-self: center;
`

function Login({show, close}){
    const {setUserLogin} = useContext(AppContext);
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
            password: Yup.string()
            .min(3, 'Must be minimum 3 characters')
            .required('Required'),
        }),
        onSubmit: values => {
          console.log(values);
          localStorage.setItem("kartUser", values.email);
          setUserLogin(true);
          close();
        },
      });

    return ReactDom.createPortal(<div>
        {
            show ? 
            <ModalContainer>
                <Modal>
                    <ModalHeader>
                        <h2>Login</h2>
                    </ModalHeader>
                    <form onSubmit={formik.handleSubmit}>
                        <ModalContent>
                            <FormContent>
                                <label htmlFor="email">Email: </label>
                                <input 
                                type="text" 
                                id="email"
                                placeholder="Enter email" 
                                name="email" 
                                {...formik.getFieldProps('email')} />
                                {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
                                <label htmlFor="password">Password: </label>
                                <input 
                                    type="password"
                                    id="password"
                                    placeholder="Enter password" 
                                    name="password" 
                                    {...formik.getFieldProps('password')} />
                                    {formik.touched.email && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
                            </FormContent>
                        </ModalContent>
                        <Footer>
                            <Button onClick={close}>cancel</Button>
                            <Button type="submit">submit</Button>
                        </Footer>
                    </form>
                </Modal>
            </ModalContainer>
            : null
        }
    </div>, document.getElementById("modal")
    )
}

export default Login;
