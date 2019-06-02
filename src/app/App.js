import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from '../containers/Header';
import Homepage from './Home/Homepage';
import Cartpage from './Cart/Cartpage';
import OrderComplete from './Order/OrderComplete';

function App() {
  return (
    <Router>
      <Header/>
      <Route path="/" exact component={Homepage} />
      <Route path="/cart/" exact component={Cartpage} />
      <Route path="/order/complete/" exact component={OrderComplete} />
    </Router>
  );
}

export default App;
