import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';


class App extends React.Component {
  state = {}
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/users" render={ () => <Users greetingMessage="Good Morning"/>}/> */}
          <Route
            exact
            path="/users/:id"
            render={(props) => <Users {...props} greetingMessage="" Good Morning />}
          />
        </Switch>
      </Router>

    );
  }
}

export default App;
