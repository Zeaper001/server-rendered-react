import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Index from '../views/Index';
import About from '../views/About';

export class App extends React.Component {
  render() {
    return (
      <Layout>
        Hello World blabla
        <div><p>This is static</p></div>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
