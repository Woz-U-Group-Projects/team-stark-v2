import React from "react";
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
// import { BrowserRouter as Router, Route} from 'react-router-dom';

// const index = () => (
//   <Router>
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/User" component={User} />
//       <Route path="/Login" component={Login} />
//     </div>
//   </Router>
// );
// ReactDOM.render(<index />, document.getElementById('root'));
const Index = ({ pathname }) => {
    switch (pathname) {
      case '/User':
        return <User />;
      case '/Login':
        return <Login />;
      default:
        return <Home />;
    }
  };
  
  let pathname = window.location.pathname;
  
  ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));
  
//   window.addEventListener('popstate', () => {
//     pathname = window.location.pathname;
//   });
// const index = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/User">Register Here</Link>
//         </li>
//         <li>
//           <Link to="/Login">Login Here</Link>
//         </li>
//       </ul>

//       <hr />

//       <Route exact path="/" component={Home} />
//       <Route path="/User" component={User} />
//       <Route path="/Login" component={Login} />
//     </div>
//   </Router>
// );

// render(<index />, document.getElementById('root'));
serviceWorker.unregister();