import React from "react";
import ReactDOM from "react-dom";
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import Biller from './pages/Biller';
import DeleteBill from './pages/DeleteBill';
import UpdateBill from './pages/UpdateBill';
import UpdateUser from './pages/UpdateUser';
import DeleteUser from './pages/DeleteUser';

const Index = ({ pathname }) => {
    switch (pathname) {
      case '/User':
        return <User />;
      case '/Login':
        return <Login />;
      case '/Biller':
        return <Biller />;
      case '/DeleteBill':
        return <DeleteBill />;
      case '/UpdateBill':
        return <UpdateBill />;
      case '/UpdateUser':
        return <UpdateUser />;
      case '/DeleteUser':
        return <DeleteUser />;
      default:
        return <Home />;
    }
  };
  
  let pathname = window.location.pathname;
  
  ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));
  
  window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
  });


serviceWorker.unregister();