import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Layout from './ui/Layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
