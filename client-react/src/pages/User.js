import React from 'react';

import axios from "axios";
import '../index.css';
import '../task.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class User extends React.Component{
  constructor(props) {
    super(props);
    this.state = { User: [] };
    this.id = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.lastname = React.createRef();
    this.firstname = React.createRef();  
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
    // this.testAll();
  };

  addUser = () => {
    console.log("In addUser");
    console.log(" id + email + password + lastname + firstname" 
    + " " + this.id.current.value + " " + this.email.current.value + " " + this.password.current.value 
    + " " + this.lastname.current.value + " " + this.firstname.current.value);
    let url = "http://localhost:8080/users";
    axios.post(url, 
      { email: this.email.current.value, password: this.password.current.value, 
        lastname: this.lastname.current.value, firstname: this.firstname.current.value 
      } ).then(_response => { 
      this.getData();
      this.email.current.value = "";
      this.password.current.value = "";
      this.firstname.current.value = "";
      this.lastname.current.value = ""; 
      window.open("/Login");
    });  
  };

  deleteUser = () => {
    console.log("In deleteUser");
    console.log("id: " + this.id.current.value);
    let url = `http://localhost:8080/users/${this.id.current.value}`;
    axios.delete(url).then(_response => { 
      this.getData();
      this.id.current.value = "";
    });    
  };
  
  updateUser = () => {
    console.log("In updateUser");
    console.log("id: " + this.id.current.value);
    let url = `http://localhost:8080/users/${this.id.current.value}`; 
    axios.put(url, 
      { email: this.email.current.value, password: this.password.current.value, 
        lastname: this.lastname.current.value, firstname: this.firstname.current.value 
      }).then(_response => { 
        this.getData();
        this.id.current.value = "";
        this.email.current.value = "";
        this.password.current.value = "";
        this.firstname.current.value = "";
        this.lastname.current.value = ""; 
    });    
  };
  
  render() { 
    return (
      <div>    
        <div id="inputs">
          <h2>Bill Payment and Budget Tool</h2>
          <h3>Create User Account</h3>
          <label> First Name
          <input className="form-control" ref={this.lastname} type="text" />
          </label>
          <br></br>
          <label> Last Name
          <input className="form-control" ref={this.firstname} type="text" />
          </label>
          <br></br>
          <label> Email Address:
          <input className="form-control" ref={this.email} type="text" />
          </label>
          <br></br>
          <label> Password:
          <input className="form-control" ref={this.password} type="password" />
          </label>
          <br></br>
          <button type="button" className="btn btn-primary" onClick={this.addUser}>Create</button>
          <br></br>
          <h3>Delete User Account</h3>
          <label> User ID :
            <input className="form-control" ref={this.id} type="number" />
          </label>
          <br></br>
          <button type="button" className="btn btn-danger" onClick={this.deleteUser}>Delete</button>
          <br></br>
          {/* <h3>Update User Account</h3>
          <label> User ID :
            <input className="form-control" ref={this.id} type="number" />
          </label>
          <br></br>
          <label> First Name
          <input className="form-control" ref={this.firstname} type="text" />
          </label>
          <br></br>
          <label> Last Name
          <input className="form-control" ref={this.lastname} type="text" />
          </label>
          <br></br>
          <label> Email Address:
          <input className="form-control" ref={this.email} type="text" />
          </label>
          <br></br>
          <label> Password:
          <input className="form-control" ref={this.password} type="password" />
          </label>
          <br></br>
          <button type="button" className="btn btn-primary" onClick={this.updateUser}>Update</button>
          <br></br> */}
        </div>
        <div className="row justify-content-center">
          <span id="image">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXx3_7HGNAdOSVLJPmkpMm_gI0MBiCmeldlA&usqp=CAU'/>
          </span> 
        </div>
      </div>
    ); 
  }
}
export default User;

