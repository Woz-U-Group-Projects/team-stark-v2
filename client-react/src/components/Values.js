import React from 'react';

class Values extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
}
onGetValues = () => {
  fetch("http://localhost:8080/api/values", {
 // fetch("http://localhost:3000/api/values")
    headers: { 'Authorization': this.state.token }
  })
  .then(res => res.json())
  .then(json => this.setState({ ...this.state, values: json }));
}
render() {
     return (
       <div>
         <div>{this.props.values}</div>
         <button onClick={this.props.onGetValues}>Get Values!</button>
       </div>
     );
   }
 }

//  class App extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = { values: [] };
//    }

//    render() {
//      return (
//      <div className="App">
//        <header className="App-header">
//        {(!this.state.token || this.state.token === "")
//          : (<Values values={this.state.values} onGetValues={this.onGetValues}></Values>)}
//        </header>
//      </div>
//      );
//    }
//  }

export default Values;