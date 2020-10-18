import React from "react";
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import Biller from './pages/Biller';
import UpdateUser from './pages/UpdateUser'
import UpdateBiller from './pages/UpdateBiller'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/Login">Login</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/User">Register</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/UpdateUser">Update User</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/Biller">Biller</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/UpdateBiller">Update Biller</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/User" component={User} />
      <Route path="/Login" component={Login} />
      <Route path="/UpdateUser" component={UpdateUser}/>
      <Route path="/Biller" component={Biller} />
      <Route path="/UpdateBiller" component={UpdateBiller} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
  
serviceWorker.unregister();