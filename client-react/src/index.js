import React from "react";
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import Biller from './pages/Biller';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/User">Register</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Biller">Biller</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/User" component={User} />
      <Route path="/Login" component={Login} />
      <Route path="/Biller" component={Biller} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));

// const Index = ({ pathname }) => {
//     switch (pathname) {
//       case '/User':
//         return <User />;
//       case '/Login':
//         return <Login />;
//       case '/Biller':
//         return <Biller />;
//       default:
//         return <Home />;
//     }
//   };
  
//   let pathname = window.location.pathname;
  
//   ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));
  
serviceWorker.unregister();