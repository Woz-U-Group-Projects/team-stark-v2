import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import '../index.css';
import '../task.min.css';
import Header from '../components/Header';




class User extends React.Component{
  constructor(props) {
    super(props);
    this.state = { User: [] };
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
    this.testAll();
  };
  addUser = () => {
    console.log("In addUser");
    this.testAll();
    let url = "http://localhost:8080/users";
    axios.post(url, {email: this.email.current.value, password: this.password.current.value, lastname: this.lastname.current.value, firstname: this.firstname.current.value } ).then(_response => {
 
      this.getData();
      this.email.current.value = "";
      this.password.current.value = "";
      this.firstname.current.value = "";
      this.lastname.current.value = "";
    });
  };

  // removeUser =() => {
  //   let url = "http://localhost:8080/edit";
  //     axios.delete(url, { username: this.username.current.value , password: this.password.current.value }).then(_response => {
        
  //       this.getData();
        
  //       this.username.current.value = "";
  //       this.password.current.value = "";
  //     });
  // };
  
  render() {

    return (
      <div>
        <Header />
      <div id="inputs">
        <h4>Register Account Here</h4>
        <h2>Bill Payment and Budget Tool</h2>
        <h3>Create User Account</h3>
        <label> Email Address:
        <input className="form-control" ref={this.email} type="text" />
        </label>
        <br></br>
        <label> Password:
        <input className="form-control" ref={this.password} type="password" />
        </label>
        <br></br>
        <label> First Name
        <input className="form-control" ref={this.lastname} type="text" />
        </label>
        <br></br>
        <label> Last Name
        <input className="form-control" ref={this.firstname} type="text" />
        </label>
        <br></br>
        <button type="button" className="btn btn-primary" onClick={this.addUser}>Create</button>
    
        <ul>
          {this.state.User.map(p => (
            <li key={p.userid}> 
            //   <button type="button" className="btn btn-danger"onClick={this.removeUser}>Delete</button>
            // </li>
          ))}
        </ul> */}
      </div>
      </div>
    );
    
  }
}
export default User;

