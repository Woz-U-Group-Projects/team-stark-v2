import React from 'react';
import axios from "axios";
import '../index.css';
import '../task.min.css';
import Header from '../components/Header';

class Biller extends React.Component{
  constructor(props) {
    super(props);
    this.state = { Biller: [] };
    this.id = React.createRef();
    this.accountnumber = React.createRef();
    this.amount = React.createRef();
    this.billername = React.createRef(); 
    this.date = React.createRef();
    this.paymentType = React.createRef();
  }
  
  componentDidMount() {
    this.getData();
  };

  getData = () => {
    console.log("In getData");
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/billers";
    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";
    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ Biller: response.data }));
   //this.testAll();
  };

  addBiller = () => {
    console.log("In addBiller");
   // this.testAll();
    let url = "http://localhost:8080/billers";
    axios.post(url, { accountnumber: this.accountnumber.current.value, amount: this.amount.current.value, billername: this.billername.current.value, date: this.date.current.value, paymentType: this.paymentType.current.value } ).then(_response => {
      // refresh the data
      console.log("After axios function call");
   // this.testAll();
      this.getData();
      // empty the input
      this.emptyInput();
    });
  };

//   getBillerById = () => {
//     console.log("In getBillerById");
//     console.log("ID before axios.get: " + this.id.current.value);
//     let url = "http://localhost:8080/billers/" + this.id.current.value;
//     axios.get(url, { id: this.id.current.value } ).then(_response => {
//     // refresh the data
//     console.log("ID after axios.get: " + this.id.current.value);
//     this.getData();
//     // empty the urlinput
//     this.id.current.value = "";
//   });
// };

  emptyInput() {
      this.accountnumber.current.value = "";
      this.amount.current.value = "";
      this.billername.current.value = "";
      this.date.current.value = "";
      this.paymentType.current.value = "";
  };
  
  testAll(){
    console.log("In testAll");
    if(this.accountnumber.current.value !== ""){
      console.log("accountnumber: " + this.accountnumber.current.value);}
    else{
      console.log("accountnumber is NULL");
    }
    if(this.amount.current.value !== ""){
        console.log("amount: " + this.amount.current.value);}
    else{
        console.log("amount is NULL");
    }
    if(this.billername.current.value !== ""){
      console.log("billername: " + this.billername.current.value);}
    else{
      console.log("billername is null");
    }   
    if(this.date.current.value !== ""){
        console.log("date:" + this.date.current.value);}
    else{
      console.log("date is null");
    } 
    if(this.paymentType.current.value !== ""){
      console.log("paymentType:" + this.paymentType.current.value);}
    else{
      console.log("paymentType is null");
    }
};

  render() {
    return (
      <div><Header />
        <div id="inputs">
          <div>
            <h2>Bill Payment and Budget Tool</h2>
            <h3>Add Bill</h3>
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
            <button type="button" className="btn btn-primary" onClick={this.addBiller}>Add Biller</button>
            <br></br>
          </div>

          {/* <div>
            <h3>Get Biller </h3>
            <label> ID:
            <input className="form-control" ref={this.id} type="number" />
            </label>
            <br></br>
            <br></br>
            <button type="button" className="btn btn-primary" onClick={this.getBillerById}>Get Biller</button>
            <br></br>
          </div> */}
          
          {/* <div>
            <h3>Update Biller </h3>
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
            <br></br>
            <button type="button" className="btn btn-primary" onClick={this.updateProject}>Update Biller</button>
            <br></br>
          </div> */}
        </div>
      </div>
    );
  }
}
export default Biller;