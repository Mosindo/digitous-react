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

  render() {
    return (
      <div className="Containter-fluid">
        <h1 className="text-primary">Counter</h1>
        <Counter/>
        
      </div>
    );
  }
}

export default App;
