import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Categories from './components/Categories/Categories';
import Filters from './components/Filters/Filters';
// import { MemoizedFilters } from './components/Filters/Filters'
import Products from './components/Products/Products';
import styled from 'styled-components';
import { FilterContext } from './components/Contexts/FilterContext';

const MainContainer = styled.div`
  display: flex;
  padding: 20px;
`

function App() {
  console.log('App component');

  const [rangeval, setRangeval] = useState(null);
  const [colorCodes, setcolorCodes] = useState([]);

  return (
    <div className="App">
        <Categories/>
        {/* <FilterContext.Provider value={React.useMemo(()=>({slider: {rangeval, setRangeval}, color: {colorCodes, setcolorCodes} }), rangeval, setRangeval, colorCodes, setcolorCodes)} > */}
        <FilterContext.Provider value={{slider: {rangeval, setRangeval}, color: {colorCodes, setcolorCodes} }} >
        <MainContainer>
          {/* <MemoizedFilters /> */}
          <Filters/>
          <Products />
        </MainContainer>
        </FilterContext.Provider>
    </div>
  );
}

export default React.memo(App);
