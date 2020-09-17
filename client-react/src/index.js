// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

import React from "react";
import ReactDOM from "react-dom";
const App = props => {
    return<NumberOfStudents />;
}
class NumberOfStudents extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        // firstName : "",
        firstName: "",
        // totalWaitlisted: 10,
        lastName: "",
        fullName: ""
        };
    }
    // incrementEnrollmentByOne() {
    //     this.setState(
    //         { totalEnrolled: this.state.totalEnrolled + 1 }
    //     );
    // }
    // incrementEnrollment() {
    //     this.setState(
    //         { totalEnrolled: this.state.totalEnrolled + parseInt(this.state.addToEnrollment) }
    //     );
    // }
    // incrementWaitlistByOne() {
    //     this.setState(
    //         { totalWaitlisted: this.state.totalWaitlisted + 1 }
    //     );
    // }
    // incrementWaitlist() {
    //     this.setState(
    //         { totalWaitlisted: this.state.totalWaitlisted + parseInt(this.state.addToWaitlist) }
    //     );
    // }
    customerName() {
      this.setState(
        {fullName: this.state.firstName + " " + this.state.lastName}
      )
    }
    render() {
        return (
            <div>
              <h1>Bill Payment and Budget Tool</h1>
                {/* <h3>First Name {this.state.firstName}</h3> */}
                {/* <button onClick={this.incrementEnrollmentByOne.bind(this)}>Add 1 Enrolled Student</button> */}
                <h2>First Name </h2>
                <input
                    type="text"
                    onChange={event => this.setState({ firstName: event.target.value })}
                    value={this.state.firstName}
                />
                {/* <button onClick={this.incrementEnrollment.bind(this)}>Increase Students</button> */}
                {/* <h3>Waitlisted Students: {this.state.totalWaitlisted}</h3>
                <button onClick={this.incrementWaitlistByOne.bind(this)}>Add 1 Waitlisted Student</button> */}
                <h2>Last Name </h2>
                <input
                    type="text"
                    onChange={event => this.setState({ lastName: event.target.value })}
                    value={this.state.lastName}
                />
                <br></br>
                <br></br>
                <button onClick={this.customerName.bind(this)}>Submit</button>
                <h2>Full Name: {this.state.fullName}</h2>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//     React.createElement( 'h1', {}, 'Bill Payment and Budget Tool'),
//     document.getElementById('root')
//   );
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
