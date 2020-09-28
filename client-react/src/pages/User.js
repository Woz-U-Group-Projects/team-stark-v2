import React from 'react';
import { render } from 'react-dom';
import axios from "axios";
import '../index.css';
import '../task.min.css';
import Header from '../components/Header';

// class UserHeader  {
  //<Header title="User" />;
// }
//   render UserHeader
class User extends React.Component{
  constructor(props) {
    super(props);
    this.state = { User: [] };
    this.email = React.createRef();
    this.lastname = React.createRef(); 
    this.username = React.createRef();
    this.password = React.createRef();
  }
  
  // componentDidMount() {
  //   this.getData();
  // }
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
    axios.post(url, { username: this.username.current.value, password: this.password.current.value, lastname: this.lastname.current.value } ).then(_response => {
      // refresh the data
      console.log("After axios function call");
      this.testAll();
      this.getData();
      // empty the input
      this.username.current.value = "";
      this.password.current.value = "";
      this.lastname.current.value = "";
    });
  };
  // removeUser =() => {
  //   let url = "http://localhost:8080/edit";
  //     axios.delete(url, { username: 'this.username.current.value', password: 'this.password.current.value' }).then(_response => {
        
  //       this.getData();
        
  //       this.username.current.value = "";
  //       this.password.current.value = "";
  //     });
  // };
  testAll(){
    if(this.username.current.value !== ""){
        console.log("username:" + this.username.current.value);}
    else{
      console.log("username is NULL");
    }
    if(this.password.current.value !== ""){
      console.log("password:" + this.password.current.value);}
    else{
      console.log("password is NULL");
    }
    if(this.lastname.current.value !== ""){
      console.log("lastname:" + this.lastname.current.value);
    }else{
      console.log("lastname is NULL");
    }   
  }
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
        <label> Lastname:
          <input className="form-control" ref={this.lastname} type="text" />
        </label>
        <br></br>
        <button type="button" className="btn btn-primary" onClick={this.addUser}>Create</button>
        <br></br>
        {/* <label> Email Address to Remove:
        <input className="form-control" ref={this.username} type="text" />
        <label/> */}
        {/* <button type="button" className="btn btn-danger" onClick={this.removeUser}>Delete Account</button> */}
        {/* <ul>
          {this.state.User.map(p => (
            <li key={p.userid}> */}
            {/* THIS IS "COMPLETE" Task DATABASE FIELD-Sheila note */}
                {/* {p.username}, {p.password}, {p.lastname} : { p.complete ? "complete" : "not complete" }
              <button type="button" className="btn btn-success">Complete</button>
              <button type="button" className="btn btn-danger"onClick={this.removeUser}>Delete</button>
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}
export default User;
// const UserHeader  () {
//   UserHeader = () => <Header title="User" />;
// }

