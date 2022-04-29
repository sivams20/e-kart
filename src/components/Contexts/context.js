import axios from "axios";
import React, { useEffect, useState } from "react";

const AppContext = React.createContext({});

export const AppProvider = AppContext.Provider;

export default AppContext;

export const Provider = (props) => {
    const isLoggedIn = (localStorage.getItem('kartUser')) ? true : false;
    const [isUserLoggedIn, setUserLogin] = useState(isLoggedIn);
    const [filterObject, setFilterObject] = useState({
        color: '',
        slider: ''
    })

    const [filterOptions, setFilterOptions] = useState({})

    const [products, setProducts] = useState([])

    const actions = { 
        setFilterObject,
        setUserLogin
    }

    useEffect(()=>{
        axios.get('https://run.mocky.io/v3/fdbe3884-b824-466c-8da4-0d0ecad17e7c')
        .then(response => {
            setFilterOptions({colors : response.data})
        })
        .catch(error => {

        })
        .finally(()=>{

        })
    },[])

    useEffect(() => {
        axios.get('https://run.mocky.io/v3/ace59d18-981c-431e-ae56-5d2f37e2ab10')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            
        })
        .finally(() => {

        })
    }, [filterObject]);

    const state = {
        filterOptions,
        products,
        filterObject,
        isUserLoggedIn
    }

    return(
        <AppContext.Provider value={
            {
                ...state,
                ...actions
            }
        }>
            {props.children}
        </AppContext.Provider>
    )
}


