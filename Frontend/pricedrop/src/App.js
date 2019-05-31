import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import TabContainer from './components/items/TabContainer'
import ItemContainer from './components/items/ItemContainer'
import MainAppBar from './components/layout/MainAppBar'

function App() {
  return (
    <React.Fragment>
    <div className="App">
    <MainAppBar />
        <TabContainer/>
    </div>
    </React.Fragment>
  );
}

export default App;
