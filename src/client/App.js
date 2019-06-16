import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import { Route, Switch, NavLink } from 'react-router-dom';
import Index from '../views/Index';
import About from '../views/About';

export class App extends React.Component {
  render() {
    return (
      <Layout>
        Hello World blabla
        <div><p>This is static</p></div>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
