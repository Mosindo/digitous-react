import React from "react";
import './App.css';
import  Box from "./components/Box";


const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      water:0,
      heart:120,
      temperature:-10,
      steps :3000,
      
    };
    //this.onHeartChange = this.onHeartChange.bind(this);
  }
  onStepsChange= value =>{console.log(value.target.value)
    this.setState({ steps:value.target.value});
    this.calculateWater();
  }
  onHeartChange= value =>{console.log(value.target.value)
    this.setState({ heart:value.target.value})
    this.calculateWater();
  }
  onTempChange= value =>{console.log(value.target.value)
    this.setState({ temperature:value.target.value})
    this.calculateWater();
  }

  calculateWater=()=>{
    let eau= 1.5;
    if (this.state.steps>10000){
        eau += 0.00002 * (this.state.steps-10000) ;
        this.setState({water:eau});
    }
    else{
      this.setState({water:eau});
    }

    if (this.state.heart>120){
      eau += 0.0008 * (this.state.heart-120) ;
      this.setState({water:eau});
    }
    else{
    this.setState({water:eau});
    }
    if (this.state.temperature>20){
    eau += 0.02 * (this.state.temperature-20) ;
    this.setState({water:eau});
    }
    else{
    this.setState({water:eau});
    }
  }
  
 
  render() {
    return (
      <div className ="container-fluid row">
        
        <Box icon={"local_drink"} color={"#3A85FF"} value={1.5}  unit={"L" } value={this.state.water}/> 
        <Box type={"range"} onChange = {this.onStepsChange} icon={"directions_walk"} color={"black"} value={this.state.steps} unit={" steps"} min={stepsMin} max={stepsMax}/> 
        <Box type ={"range"}onChange={this.onHeartChange} icon ={"favorite"} color={"red"} unit={"bpm"} min = {heartMin} max={heartMax} value={this.state.heart} /> 
        <Box type ={"range"} onChange = {this.onTempChange} icon={"wb_sunny"} color={"yellow"} value={this.state.temperature} unit={"°C"} min={tempMin}  max ={tempMax}/> 

      </div>
    );
  }
}

export default App;