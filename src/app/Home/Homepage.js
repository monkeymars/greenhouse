import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css';
import Catalog from '../../containers/Catalog';

function Home() {
  return (
    <div className="App">
        <Catalog/>
    </div>
  );
}

export default Home;
