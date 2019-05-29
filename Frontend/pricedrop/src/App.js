import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@material-ui/core';
import ItemContainer from './components/items/ItemContainer'
import MainAppBar from './components/layout/MainAppBar'

function App() {
  return (
    <React.Fragment>
    <div className="App">
    <MainAppBar />
      <Container>
        <ItemContainer></ItemContainer>
      </Container>
    </div>
    </React.Fragment>
  );
}

export default App;
