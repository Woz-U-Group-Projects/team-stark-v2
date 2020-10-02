import React from 'react';
import axios from "axios";
import '../index.css';
import '../task.min.css';
import Header from '../components/Header';

class DeleteUser extends React.Component{
  constructor(props) {
    super(props);
    this.state = { User: [] };
    // this.username = React.createRef();
    this.id = React.createRef();
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
    console.log("In getData");
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/users/deleteuser/{this.id}";
    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";
    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ UpdateUser: response.data }));
   //this.testAll();
  };
  deleteUser = () => {
    console.log ("In updateProject");
    let url = "http://localhost:8080/users/deleteuser/{this.id}";
    console.log("ID before axios.put: " + this.id.current.value);
    axios.delete(url, { id: this.id.current.value } ).then(_response => {
    // axios.delete(url, { id: this.id.current.value, email: this.email.current.value, password: this.password.current.value, lastname: this.lastname.current.value, firstname: this.firstname.current.value }).then(_response => {
    // refresh data
    console.log("after axios.put email: " + this.email.current.value);
    console.log("password: " + this.password.current.value);
    console.log("lastname: " + this.lastname.current.value);
    console.log("firstname: " + this.firstname.current.value);
    this.getData();
    // empty input
    this.email.current.value = "";
    this.password.current.value= "";
    this.lastname.current.value = "";
    this.firstname.current.value = "";
    });
  };

  render() {
    return (
      <div>
        <Header />
          <div id="inputs">
            <h2>Bill Payment and Budget Tool</h2>
            <h3>Delete User Account</h3>
            <label> ID:
              <input className="form-control" ref={this.id} type="text" />
            </label>
            <br></br>
            <button type="button" className="btn btn-primary" onClick={this.deleteUser}>Delete User</button>
            <br></br>
          </div>
      </div>
    );
  }
}
export default DeleteUser;
