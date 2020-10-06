import React from 'react';
import axios from "axios";
import '../index.css';
import '../task.min.css';
import Header from '../components/Header';

class UpdateBill extends React.Component{
  constructor(props) {
    super(props);
    this.state = { UpdateBill: [] };
    this.id = React.createRef();
    this.accountnumber = React.createRef();
    this.amount = React.createRef();
    this.billername = React.createRef(); 
    this.date = React.createRef();
    this.paymentAmount = React.createRef();
    this.paymentType = React.createRef();
    this.scheduled = React.createRef();
  }
  
  componentDidMount() {
    this.getData();
  };

  getData = () => {
    console.log("In getData in update bill");
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/billers/{this.id}";
    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";
    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ UpdateBill: response.data }));
  };

updateProject = () => {
    console.log ("In updateProject in update bill");
    let url = "http://localhost:8080/billers/{this.id}";
    console.log("In update bill ID before axios.put: " + this.id.current.value);
    axios.put(url, { id: this.id.current.value, accountnumber: this.accountnumber.current.value, amount: this.amount.current.value, billername: this.billername.current.value, date: this.date.current.value, paymentAmount: this.paymentAmount.current.value, paymentType: this.paymentType.current.value, Scheduled: this.scheduled.current.value }).then(_response => {
      // refresh data
      console.log("In update bill after axios.put accountnumber: " + this.accountnumber.current.value);
      console.log("amount: " + this.amount.current.value);
      console.log("date: " + this.date.current.value);
      console.log("billername: " + this.billername.current.value);
      console.log("date: " + this.date.current.value);
      console.log("paymentType: " + this.paymentType.current.value);
      this.getData();
      // empty input
      this.accountnumber.current.value = "";
      this.amount.current.value = "";
      this.date.current.value = "";
      this.billername.current.value = "";
      this.date.current.value = "";
    });
  };

  render() {
    return (
      <div><Header />
        <div id="inputs">
          <div>
          <h2>Bill Payment and Budget Tool</h2>
            <h3> Update Bill </h3>
            <label> ID:
            <input className="form-control" ref={this.id} type="number" />
            </label>
            <br></br>
            <label> Account Number:
            <input className="form-control" ref={this.accountnumber} type="number" />
            </label>
            <br></br>
            <label> Biller Name:
            <input className="form-control" ref={this.billername} type="text" />
            </label>
            <br></br>
            <label> Bill Amount:
              <input className="form-control" ref={this.amount} type="number" />
            </label>
            <br></br>
            <label> Bill Date :
              <input className="form-control" ref={this.date} type="date" />
            </label>
            <br></br>
            <label> Payment Type :
              <input className="form-control" ref={this.paymentType} type="text" />
            </label>
            <br></br>
            <label> Payment Amount :
              <input className="form-control" ref={this.paymentAmount} type="number" />
            </label>
            <br></br>
            <label> Schedule Payment? true / false :
              <input className="form-control" ref={this.scheduled} type="text" />
            </label>
            <br></br>
            <br></br>
            <button type="button" className="btn btn-primary" onClick={this.updateProject}>Update Biller</button>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateBill;