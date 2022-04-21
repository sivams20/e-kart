import React from 'react';
import './App.css';
import Categories from './components/Categories/Categories';
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products';
import styled from 'styled-components';
import { Provider } from './components/Contexts/context';

const MainContainer = styled.div`
  display: flex;
  padding: 20px;
`

function App() {
  console.log('App component');

  return (
    <div className="App">
        <Categories/>
        <Provider>
          <MainContainer>
            <Filters/>
            <Products />
          </MainContainer>
        </Provider>
    </div>
  );
}

export default React.memo(App);
