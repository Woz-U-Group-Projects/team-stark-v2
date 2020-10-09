// import React from 'react';
// import Header from '../components/Header';

// const Login = () => <Header title="Login Here" />;

// export default Login;

import React from 'react';
import axios from "axios";
import '../index.css';
import '../task.min.css';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={ User: [] };
    this.email = React.createRef();
    this.password = React.createRef();
    }

  getData = () => {
    console.log("In getData");
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/users";
    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";
    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ User: response.data }));
    
  };
 
  
  render() {

    return (
      <div>
        
      <div id="inputs">
        <h2>Login</h2>
        <label> Email Address:
        <input className="form-control" ref={this.email} type="text" />
        </label>
        <br></br>
        <label> Password:
        <input className="form-control" ref={this.password} type="password" />
        </label>
        <br></br>
        <button type="button" className="btn btn-primary" onClick={this.getData}>Login</button>

      </div>
      </div>
    );
    
  };
}

export default Login;