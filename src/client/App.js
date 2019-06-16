import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import {Route, Switch, NavLink} from 'react-router-dom';
import Index from '../views/Index';
import About from '../views/About';
import Users from '../views/Users';
import NotFound from '../views/NotFound';

export class App extends React.Component {
  render() {
    return (
      <Layout>
        Hello World blabla
        <div><p>This is static</p></div>

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/users" exact component={Users}></Route>
          <Route component={NotFound} />
        </Switch>

      </Layout>
    )
  }
}

export default App;
