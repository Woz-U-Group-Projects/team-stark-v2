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
import Payment from './pages/Payment';
import UpdatePayment from './pages/UpdatePayment';
import DeletePayment from './pages/DeletePayment';

const Index = ({ pathname }) => {
    switch (pathname) {
      case '/Login':
        return <Login />;
      case '/User':
        return <User />;
      case '/UpdateUser':
        return <UpdateUser />;
      case '/DeleteUser':
        return <DeleteUser />;
      case '/Biller':
        return <Biller />;
      case '/UpdateBill':
        return <UpdateBill />;
      case '/DeleteBill':
        return <DeleteBill />;
      case '/Payment':
        return <Payment />;
      case '/UpdatePayment':
        return <UpdatePayment />;
      case '/DeletePayment':
        return <DeletePayment />;
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