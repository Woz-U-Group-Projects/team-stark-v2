import React from 'react';
import axios from "axios";
import '../index.css';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { User: [] };
    this.username = React.createRef();
    this.password = React.createRef();

  }

  componentDidMount() {
    this.getData();
  }

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
    axios.post(url, { username: this.username.current.value } , { password: this.password.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.username.current.value = "";
      this.password.current.value = "";
    });
  };


  render() {
    return (
      <div>
        <h4>Bill Payment and Budget Tool</h4>
        <h3>Create User Account</h3>
        <input ref={this.username} /><br></br>
        <input ref={this.password} />
        <button type="button" className="btn btn-primary" onClick={this.addUser}>Create</button>
        {/* <ul>
          {this.state.User.map(p => (
            <li key={p.userid}>  
            THIS IS "COMPLETE" Task DATABASE FIELD-Sheila note
              {p.username} : { p.complete ? "complete" : "not complete" } <button type="button" className="btn btn-success">Complete</button><button type="button" className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default User;
// render() {
//   if (!this.props.token || this.props.token === "") {
//        return (
//          <div>
//            <div style={{color: "red"}}>{(this.props.error ? this.props.error: '')}</div>
//            <div>
//              <label htmlFor="username">Username:</label>
//              <input type="text" id="username" name="username" onChange={this.props.onUsernameChange} />
//            </div>
//            <div>
//              <label htmlFor="password">Password:</label>
//              <input type="password" id="password" name="password" onChange={this.props.onPasswordChange} />
//            </div>
//            <div>
//              <button onClick={this.props.onLogin}>Submit</button>
//            </div>
//          </div>
//        );
//      } else { return (<div>Logged In</div>); }
//    }
//  }
//  export default User;