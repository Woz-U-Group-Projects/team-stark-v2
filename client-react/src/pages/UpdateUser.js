import React from 'react';
import axios from "axios";
import '../index.css';
import '../task.min.css';
import Header from '../components/Header';

class UpdateUser extends React.Component{
  constructor(props) {
    super(props);
    this.state = { UpdateUser: [] };
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
    console.log("In getData in update user");
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/users/{this.id}";
    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";
    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ UpdateUser: response.data }));
  };

  updateProject = () => {
    console.log ("In updateProject in update user");
    let url = "http://localhost:8080/users/{this.id}";
    console.log("ID before axios.put: " + this.id.current.value);
    axios.put(url, { id: this.id.current.value, email: this.email.current.value, password: this.password.current.value, lastname: this.lastname.current.value, firstname: this.firstname.current.value }).then(_response => {
      // refresh data
      console.log("in update user after axios.put email: " + this.email.current.value);
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
            <h3>Update User Account</h3>
            <label> ID:
              <input className="form-control" ref={this.id} type="number" />
            </label>
            <br></br>
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
            <button type="button" className="btn btn-primary" onClick={this.updateProject}>Update User</button>
            <br></br>
          </div>
      </div>
    );
  }
}
export default UpdateUser;

