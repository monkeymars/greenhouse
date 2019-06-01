import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Homepage from './Home/Homepage';
import Cartpage from './Cart/Cartpage';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route path="/cart/" exact component={Cartpage} />
    </Router>
  );
}

export default App;
