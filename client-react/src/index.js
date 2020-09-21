import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';

// CODE WE ADDED BEGIN
//import './index.css';
// const App = props => {
//     return<Customer />;
// }
// class Customer extends React.Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//         firstName: "",
//         lastName: "",
//         fullName: "",
//         email: "",
//         phone: ""
//     };
// }
    // incrementEnrollmentByOne() {this.setState({ totalEnrolled: this.state.totalEnrolled + 1 });}
    // incrementEnrollment() {this.setState({ totalEnrolled: this.state.totalEnrolled + parseInt(this.state.addToEnrollment) });}
//     customerName() {
//       this.setState(
//         {fullName: this.state.firstName + " " + this.state.lastName},
//         {email: this.state.email}
//       )
//     }
//     render() {
//         return (
//             <div>
//               <h3>Bill Payment and Budget Tool</h3>
//                 {/* <h3>First Name {this.state.firstName}</h3> */}
//                 {/* <button onClick={this.incrementEnrollmentByOne.bind(this)}>Add 1 Enrolled Student</button> */}
//                 <h3>First Name: </h3>
//                 <input
//                     type="text"
//                     onChange={event => this.setState({ firstName: event.target.value })}
//                     value={this.state.firstName}
//                 />
//                 {/* <button onClick={this.incrementEnrollment.bind(this)}>Increase Students</button> */}
//                 <h3>Last Name </h3>
//                 <input
//                     type="text"
//                     onChange={event => this.setState({ lastName: event.target.value })}
//                     value={this.state.lastName}
//                 />
//                 <h3>Email: </h3>
//                 <input
//                     type="text"
//                     onChange={event => this.setState({ email: event.target.value })}
//                     value={this.state.email}
//                 />
//                 <br></br>
//                 <br></br>
//                 <button onClick={this.customerName.bind(this)}>Submit</button>
//                 <h3>Full Name: {this.state.fullName}
//                   Email: {this.state.email}</h3>
//             </div>
//         );
//     }
// }
// END OF CODE WE ADDED END
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();