import React from 'react';
import axios from "axios";
import '../index.css';
import '../task.min.css';
import Header from '../components/Header';

class DeleteBill extends React.Component{
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
        let url = "http://localhost:8080/billers/delete/{this.id}";
        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";
        // Express uses port 3001 (react uses 3000)
        //let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ DeleteBill: response.data }));
        console.log("In get data after axios.get ");
        this.test();
    };

    deleteBiller = () => {
        console.log("In deleteBiller");
        console.log("ID before axios.delete: " + this.id.current.value);
        //this.emptyInput();
        let url = "http://localhost:8080/billers/delete/{this.id}";
       axios.delete(url, { id: this.id.current.value } ).then(_response => {
       // axios.put(url, { accountnumber: this.accountnumber.current.value, amount: this.amount.current.value, billername: this.billername.current.value, date: this.date.current.value, paymentType: this.paymentType.current.value } ).then(_response => {
        // refresh the data
        console.log("ID after axios.delete: " + this.id.current.value);
        this.test();
        this.getData();
        // empty the input
        this.id.current.value = "";
        });
    };

    emptyInput(){
        this.accountnumber.current.value = "999999999";
        this.amount.current.value = "-99";
        this.billername.current.value = "DELETE";
        this.date.current.value = "3030-12-30";
        this.paymentType.current.value = "DELETE";
    };
  
    test(){
        console.log("In test");
        if(this.id.current.value !== ""){
            console.log("id: " + this.id.current.value);
        }else{
            console.log("id is NULL");
        }
    };

    render() {
        return (
        <div><Header />
            <div id="inputs">
            <h2>Bill Payment and Budget Tool</h2>
                <h3> Delete Bill </h3>
                <label> ID:
                <input className="form-control" ref={this.id} type="number" />
                </label>
                <br></br>
                <br></br>
                <button type="button" className="btn btn-primary" onClick={this.deleteBiller}>Delete Biller</button>
                <br></br>
            </div>
        </div>
        );
    };
}
export default DeleteBill;