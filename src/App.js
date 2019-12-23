import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout.component';
import AppHolder from './containers/appHolder/appHolder.component';

function App() {
  return (
    <div className="App">
      <Layout>
        <AppHolder />
      </Layout>
    </div>
  );
}

export default App;
