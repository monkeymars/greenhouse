import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from '../containers/Header';
import Catalog from '../containers/Catalog';

function App() {
  return (
    <div className="App">
      <Header/>
      <Catalog/>
    </div>
  );
}

export default App;
