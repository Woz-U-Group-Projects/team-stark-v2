

import React from "react";
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import Biller from './pages/Biller';
import DeleteBill from './pages/DeleteBill';
import UpdateBill from './pages/UpdateBill';
import UpdateUser from './pages/UpdateUser';
import DeleteUser from './pages/DeleteUser';
import Payment from './pages/Payment';
import UpdatePayment from './pages/UpdatePayment';
import DeletePayment from './pages/DeletePayment';
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
        <Link to="/Biller">Biller</Link>
        </li>
      </ul>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/User">Register</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li> */}
        {/* <li>
          <Link to="/UpdateUser">Update User Account</Link>
        </li>
        <li>
          <Link to="/DeleteUser">Delete User Account</Link>
        </li> */}
        {/* <li>
          <Link to="/Biller">Biller</Link>
        </li> */}
        {/* <li>
          <Link to="/UpdateBill">Update a Bill</Link>
        </li>
        <li>
          <Link to="/DeleteBill">Delete a Bill</Link>
        </li>
        <li>
          <Link to="/Payment">Payment</Link>
        </li>
        <li>
          <Link to="/UpdatePayment">Update a Payment</Link>
        </li>
        <li>
          <Link to="/DeletePayment">Delete a Payment</Link>
        </li> */}
      {/* </ul> */}

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/User" component={User} />
      <Route path="/Login" component={Login} />
      {/* <Route path="/UpdateUser" component={UpdateUser} />
      <Route path="/DeleteUser" component={DeleteUser} /> */}
      <Route path="/Biller" component={Biller} />
      {/* <Route path="/UpdateBill" component={UpdateBill} />
      <Route path="/DeleteBill" component={DeleteBill} />
      <Route path="/Payment" component={Payment} />
      <Route path="/UpdatePayment" component={UpdatePayment} />
      <Route path="/DeletePayment" component={DeletePayment} /> */}
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));

  
serviceWorker.unregister();