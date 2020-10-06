import React from 'react';
import axios from "axios";
import '../index.css';
import '../task.min.css';
import Header from '../components/Header';
import Login from '../pages/Login';

class User extends React.Component{
  constructor(props) {
    super(props);
    this.state = { User: [] };
    // this.username = React.createRef();
  // this.id = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.lastname = React.createRef();
    this.firstname = React.createRef();
  }
  
  componentDidMount() {
    console.log("In componentDidMount");
    this.getData();
  };

  getData = () => {
    console.log("In getData in user");
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/users";
    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";
    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ User: response.data }));
  };

  addUser = () => {
    console.log("In addUser before axios.post call");
    let url = "http://localhost:8080/users";
    this.testAll();
    axios.post(url, { email: this.email.current.value, password: this.password.current.value, lastname: this.lastname.current.value, firstname: this.firstname.current.value }).then(_response => {
      // refresh the data
      console.log("In addUser after axios.post call");
      this.getData();
      // empty the input
      this.email.current.value = "";
      this.firstname.current.value = "";
      this.lastname.current.value = "";
      this.password.current.value = "";
    });
  };
  
  testAll(){
    console.log("In user test all")
    if(this.email.current.value !== ""){
        console.log("email:" + this.email.current.value);}
    else{
      console.log("email is NULL");
    }
    if(this.password.current.value !== ""){
      console.log("password:" + this.password.current.value);}
    else{
      console.log("password is NULL");
    }
    if(this.firstname.current.value !== ""){
      console.log("firstname:" + this.firstname.current.value);
    }else{
      console.log("firstname is NULL");
    }   
    if(this.lastname.current.value !== ""){
      console.log("lastname:" + this.lastname.current.value);
    }else{
      console.log("lastname is NULL");
    }   
  };
  
  render() {
    return (
      <div>
        <Header />
          <div id="inputs">
            <h2>Bill Payment and Budget Tool</h2>
            <h3>Create User Account</h3>
            <label> Firstname:
              <input className="form-control" ref={this.firstname} type="text" />
            </label>
            <br></br>
            <label> Lastname:
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
            <button type="button" className="btn btn-primary" onClick={this.addUser}>Create</button>
            <br></br>
          </div>
      </div>
    );
  }
}
export default User;


