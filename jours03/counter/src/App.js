import React from "react";
import './App.css';
import Counter from "./components/Counter";

export class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state={
      count: 0
    }
  }
  decrementCount=()=>{
    this.setState({count:this.state.count - 1})
  }
  incrementCount=()=>{
    this.setState({count:this.state.count + 1})
  }
addFunction=()=>{
this.setState({count:this.state.count + 1});
}

removeFunction=()=>{
  this.setState({count:this.state.count - 1});
}
  render() {
    if (this.state.count<0){
      return  <div className="Containter-fluid">
      <h1 className="text-primary">Counter</h1>
      <Counter count={this.state.count = 0} addFunction={this.addFunction} removeFunction={this.removeFunction}/>
      
    </div>
    }
    return (
      <div className="Container-fluid ">

        <h1 className="text-primary d-flex">Counter</h1>
        <Counter count={this.state.count} addFunction={this.addFunction} removeFunction={this.removeFunction}/>
        
      </div>
    );
  }
}

export default App;
