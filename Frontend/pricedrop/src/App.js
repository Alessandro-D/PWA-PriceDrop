import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@material-ui/core';
import ItemList from './components/Itemlist'
import MainAppBar from './components/MainAppBar'

function App() {
  return (
    <React.Fragment>
    <div className="App">
    <MainAppBar />
      <Container>
        <ItemList></ItemList>
      </Container>
    </div>
    </React.Fragment>
  );
}

export default App;
