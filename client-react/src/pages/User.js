import React from 'react';
import { render } from 'react-dom';
import axios from "axios";
import '../index.css';
import '../task.min.css';
import Header from '../components/Header';

// const UserHeader = () => <Header title="User" />;
// class UserHeader  {
//   <Header title="User" />;
// }
//   render UserHeader


class User extends React.Component{
  constructor(props) {
    super(props);
    this.state = { User: [] };
    this.username = React.createRef();
    this.password = React.createRef();
    
  }
  
  // componentDidMount() {
  //   this.getData();
  // }

  getData = () => {
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/users";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ User: response.data }));
  };

  addUser = () => {
    let url = "http://localhost:8080/users";
    axios.post(url, { username: this.username.current.value, password: this.password.current.value } ).then(_response => {
      // refresh the data
      this.getData();
      // empty the input
      this.username.current.value = "";
      this.password.current.value = "";
    });
  };

  removeUser =() => {
    let url = "http://localhost:8080/edit";
      axios.delete(url, { username: this.username.current.value , password: this.password.current.value }).then(_response => {
        
        this.getData();
        
        this.username.current.value = "";
        this.password.current.value = "";
      });
  };
  

  render() {
    return (
      
      <div id="inputs">
        <h2>Bill Payment and Budget Tool</h2>
        <h3>Create User Account</h3>
        <label> Email Address:
        <input className="form-control" ref={this.username} type="text" />
        </label>
        <br></br>
        <label> Password:
        <input className="form-control" ref={this.password} type="password" />
        </label>
        <br></br>
        <button type="button" className="btn btn-primary" onClick={this.addUser}>Create</button>
        <br></br>
        {/* <label> Email Address to Remove:
        <input className="form-control" ref={this.username} type="text" />
        <label/> */}
        {/* <button type="button" className="btn btn-danger" onClick={this.removeUser}>Delete Account</button> */}
        <ul>
          {this.state.User.map(p => (
            <li key={p.userid}>  
            {/* THIS IS "COMPLETE" Task DATABASE FIELD-Sheila note */}
              {p.username} , { p.password ? "complete" : "not complete" } 
              <button type="button" className="btn btn-success">Complete</button>
              <button type="button" className="btn btn-danger"onClick={this.removeUser}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
}


export default User;


// const UserHeader  () {

//   UserHeader = () => <Header title="User" />;
// }