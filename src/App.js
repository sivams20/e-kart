import logo from './logo.svg';
import React from 'react';
import './App.css';
import Categories from './components/Categories/Categories';
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  padding: 20px;
`

function App() {
  return (
    <div className="App">
        <Categories/>
        <MainContainer>
          <Filters />
          <Products />
        </MainContainer>
    </div>
  );
}

export default App;
