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

  
  water ={icon:"local_drink", color:"#3A85FF",value:1.5, unit:"L",};//water
  steps= {icon:"directions_walk", color:"black",value:3000, unit:"steps",min:stepsMin,max:stepsMax};//steps
  heart={icon:"favorite", color:"red",value:120, unit:"bpm",min:heartMin ,max:heartMax};//heart
  temperature = {icon:"wb_sunny", color:"yellow",value:-10, unit:"°C", min:tempMin , max : tempMax};//temperature
    
    
    
constructor(props){
  super(props);
  this.state ={
    water:0,
    haert:120,
    temperature:-10,
    steps :3000,
  }
 /* this.state ={
    displayElsy:[{icon:"local_drink", color:"#3A85FF",value:1.5, unit:"L"},//water
    {icon:"directions_walk", color:"black",value:3000, unit:"steps"},//steps
    {icon:"favorite", color:"red",value:120, unit:"bpm"},//heart
    {icon:"wb_sunny", color:"yellow",value:-10, unit:"°C"}],//temperature
    //water :0,heart:120,steps: 3000, temperature:-10
  }*/

}
  render() {
    return (
      <div className ="container-fluid row">
         {/*{this.state.displayElsy.map(function(affichage) {
          
          return <Box icon ={affichage.icon} color={affichage.color} value ={affichage.value} unit ={affichage.unit}/>;
        })}*/}
        
        <Box icon={this.water.icon} {...this.water}/> 
        <Box {...this.steps}/> 
        <Box {...this.heart}/> 
        <Box {...this.temperature}/> 

      </div>
    );
  }
}

export default App;