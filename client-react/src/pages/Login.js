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
    console.log("In getData for Login");
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/users";
    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";
    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ User: response.data }));
    console.log("email input value: " + this.email.current.value);
    console.log("password input value: " + this.password.current.value);
  };
 
  render() {

    return (
      <div>
        
      <div id="inputs">
      <h2>Bill Payment and Budget Tool</h2>
        <h3>Login</h3>
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
      <div className="row justify-content-center">
        <span id="image">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXx3_7HGNAdOSVLJPmkpMm_gI0MBiCmeldlA&usqp=CAU'/>
        </span> 
      </div>
      </div>
    );
    
  };
}

export default Login;