import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../views/Index';
import About from '../views/About';
import Users from '../views/Users';
import NotFound from '../views/NotFound';
import { Route, Switch, NavLink } from 'react-router-dom';
import Router from './Router';
import axios from 'axios';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewList: {},
      test: 'nop'
    }
  }

  componentDidMount() {
    let self = this;
      /*axios.get(`${process.env.REACT_HOST_URL}/api/v1/router`)
      .then(async res => {
        self.setState({viewList: res.data})
      }).catch(err => console.log(err));*/

  }

  render() {

    return (
      <>
        <div><p>This is static {this.state.test}</p></div>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}

export default App;
