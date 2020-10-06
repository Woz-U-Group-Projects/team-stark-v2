import React from 'react';
import axios from "axios";
import '../index.css';
import '../task.min.css';
import Header from '../components/Header';

class DeletePayment extends React.Component{
  constructor(props) {
    super(props);
    this.state = { DeletePayment: [] };
    this.id = React.createRef();
    this.billingcycle = React.createRef();
    this.minimumpayment = React.createRef();
    this.interestrate = React.createRef(); 
    this.payment_type = React.createRef();
  }
  
  componentDidMount() {
    this.getData();
  };

  getData = () => {
    console.log("In deletepayment getData");
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/payments/{this.id}";
    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";
    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ DeletePayment: response.data }));
  };

  deletePayment = () => {
    console.log("In deletePayment before axios.delete call id is: " + this.id.current.state.value);
    let url = "http://localhost:8080/payments/{this.id}";
 
    axios.delete(url, { id: this.id.current.value } ).then(_response => {
      // refresh the data
      console.log("In delete payment after axios.delete function call id is: " + this.id.current.state.value);
      this.getData();
      // empty the input
      this.emptyInput();
    });
  };

  emptyInput() {
      this.id.current.value = "";
      this.billingcycle.current.value = "";
      this.interestrate.current.value = "";
      this.minimumpayment.current.value = "";
      this.payment_type.current.value = "";
  };

  render() {
    return (
      <div><Header />
        <div id="inputs">
          <div>
            <h2>Bill Payment and Budget Tool</h2>
            <h3>Delete Payment Type</h3>
            <label> Payment ID:
            <input className="form-control" ref={this.id} type="number" />
            </label>
            <br></br>
            <br></br>
            <button type="button" className="btn btn-primary" onClick={this.deletePayment}>Delete Payment Type</button>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
export default DeletePayment;