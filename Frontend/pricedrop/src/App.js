import React from 'react';
import './App.css';
import TabContainer from './components/items/TabContainer'
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
