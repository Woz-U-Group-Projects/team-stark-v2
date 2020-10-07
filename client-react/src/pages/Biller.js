// import React from 'react';
// import axios from "axios";
// import '../index.css';
// import '../task.min.css';
// import Header from '../components/Header';

// class Biller extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = { Biller: [] };
//     this.id = React.createRef();
//     this.accountnumber = React.createRef();
//     this.amount = React.createRef();
//     this.billername = React.createRef(); 
//     this.date = React.createRef();
//     this.paymentAmount = React.createRef();
//     this.paymentType = React.createRef();
//     this.scheduled = React.createRef();
//   }
  
//   componentDidMount() {
//     this.getData();
//   };

//   getData = () => {
//     console.log("In getData in biller");
//     // Java Spring Boot uses port 8080
//     let url = "http://localhost:8080/billers";
//     // C# dotnetcore uses port 5000
//     //let url = "http://localhost:5000/projects";
//     // Express uses port 3001 (react uses 3000)
//     //let url = "http://localhost:3001/tasks";
//     axios.get(url).then(response => this.setState({ Biller: response.data }));
//   };

//   addBiller = () => {
//     console.log("In addBiller");
//    this.testAll();
//     let url = "http://localhost:8080/billers";
 
//     axios.post(url, { accountnumber: this.accountnumber.current.value, amount: this.amount.current.value, billername: this.billername.current.value, date: this.date.current.value, paymentAmount: this.paymentAmount.current.value, paymentType: this.paymentType.current.value, Scheduled: this.scheduled.current.value } ).then(_response => {
//       // refresh the data
//       console.log("After axios function call");
//    // this.testAll();
//       this.getData();
//       // empty the input
//       this.emptyInput();
//     });
//   };

//   emptyInput() {
//       this.accountnumber.current.value = "";
//       this.amount.current.value = "";
//       this.billername.current.value = "";
//       this.date.current.value = "";
//       this.paymentType.current.value = "";
//       this.paymentAmount.current.value = "";
//       this.scheduled.current.value = "";
//   };
  
//   testAll(){
//     console.log("In testAll in biller");
//     if(this.accountnumber.current.value !== ""){
//       console.log("accountnumber: " + this.accountnumber.current.value);}
//     else{
//       console.log("accountnumber is NULL");
//     }
//     if(this.amount.current.value !== ""){
//         console.log("amount: " + this.amount.current.value);}
//     else{
//         console.log("amount is NULL");
//     }
//     if(this.billername.current.value !== ""){
//       console.log("billername: " + this.billername.current.value);}
//     else{
//       console.log("billername is null");
//     }   
//     if(this.date.current.value !== ""){
//         console.log("date:" + this.date.current.value);}
//     else{
//       console.log("date is null");
//     } 
//     if(this.paymentType.current.value !== ""){
//       console.log("paymentType:" + this.paymentType.current.value);}
//     else{
//       console.log("paymentType is null");
//     }
//     if(this.paymentAmount.current.value !== ""){
//       console.log("paymentAmount:" + this.paymentAmount.current.value);}
//     else{
//       console.log("paymentType is null");
//     }
//     if(this.paymentType.current.value !== ""){
//       console.log("scheduled:" + this.scheduled.current.value);}
//     else{
//       console.log("scheduled is false by default");
//     }
// };

//   render() {
//     return (
//       <div><Header />
//         <div id="inputs">
//           <div>
//             <h2>Bill Payment and Budget Tool</h2>
//             <h3>Add Bill</h3>
//             <label> Account Number:
//             <input className="form-control" ref={this.accountnumber} type="number" />
//             </label>
//             <br></br>
//             <label> Biller Name:
//             <input className="form-control" ref={this.billername} type="text" />
//             </label>
//             <br></br>
//             <label> Bill Amount:
//               <input className="form-control" ref={this.amount} type="number" />
//             </label>
//             <br></br>
//             <label> Payment Date :
//               <input className="form-control" ref={this.date} type="date" />
//             </label>
//             <br></br>
//             <label> Payment Type :
//               <input className="form-control" ref={this.paymentType} type="text" />
//             </label>
//             <br></br>
//             <label> Payment Amount :
//               <input className="form-control" ref={this.paymentAmount} type="number" />
//             </label>
//             <br></br>
//             <label> Schedule Payment? true / false :
//               <input className="form-control" ref={this.scheduled} type="text" />
//             </label>
//             <br></br>
//             <button type="button" className="btn btn-primary" onClick={this.addBiller}>Add Biller</button>
//             <br></br>
            
//           </div>

          
          
//         </div>
//       </div>
//     );
//   }
// }
// export default Biller;

import React from 'react';
import axios from "axios";
import '../index.css';
import '../task.min.css';

class Biller extends React.Component{
  constructor(props) {
    super(props);
    this.state = { Biller: [] };
    this.billerId = React.createRef();
    this.accountnumber = React.createRef();
    this.amount = React.createRef();
    this.billername = React.createRef(); 
    this.date = React.createRef();
    this.paymentType = React.createRef();
  }
  

  getData = () => {
    console.log("In getData");
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/billers";
    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";
    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ Biller: response.data }));

  //  this.testAll();
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

//   deleteBiller = () => {
//     console.log("In deleteBiller");
//     this.testAll();
//     let url = "http://localhost:8080/billers/id";
//     axios.delete(url, { 
//       accountnumber: this.accountnumber.current.value, 
//       amount: this.amount.current.value, 
//       billername: this.billername.current.value, 
//       date: this.date.current.value, 
//       paymentType: this.paymentType.current.value } ).then(_response => { 
     
        
//       this.getData();
//       this.accountnumber.current.value = "";
//       this.amount.current.value = "";
//       this.billername.current.value = "";
//       this.date.current.value = "";
//       this.paymentType.current.value = "";
//     });    
//   };

  emptyInput(){
      this.accountnumber.current.value = "";
      this.amount.current.value = "";
      this.billername.current.value = "";
      this.date.current.value = "";
      this.paymentType.current.value = "";
  };
  
//   testAll(){
//     console.log("In testAll");
//     if(this.accountnumber.current.value !== ""){
//       console.log("accountnumber: " + this.accountnumber.current.value);}
//     else{
//       console.log("accountnumber is NULL");
//     }
//     if(this.amount.current.value !== ""){
//         console.log("amount: " + this.amount.current.value);}
//     else{
//         console.log("amount is NULL");
//     }
//     if(this.billername.current.value !== ""){
//       console.log("billername: " + this.billername.current.value);}
//     else{
//       console.log("billername is null");
//     }   
//     if(this.date.current.value !== ""){
//         console.log("date:" + this.date.current.value);}
//     else{
//       console.log("date is null");
//     } 
//     if(this.paymentType.current.value !== ""){
//       console.log("paymentType:" + this.paymentType.current.value);}
//     else{
//       console.log("paymentType is null");
//     }
// };

  render() {
    return (
      <div>
        
      <div id="inputs">
        <h2>Bill Payment and Budget Tool</h2>
        <h3>Add Biller</h3>
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
        <button type="button" className="btn btn-primary" onClick={this.addBiller}>Create</button>
        {/* <br></br>
        <label> Delete Biller :
          <input className="form-control" ref={this.paymentType} type="text" />
        </label>
        <br></br>
        <button type="button" className="btn btn-danger" onClick={this.deleteBiller}>Delete</button> */}
      </div>
    </div>
    );
  }
}
export default Biller;