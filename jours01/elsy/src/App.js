import React from "react";
import './App.css';
import  Box from "./components/Box";

export class App extends React.Component {
  tempMin = -20;
  tempMax = 40;
  heartMin = 80;
  heartMax = 180;
  stepsMin = 0;
  stepsMax = 50000;
  displayElsy=[
  {icon:"local_drink", color:"#3A85FF",value:1.5, unit:"L"},
  {icon:"directions_walk", color:"black",value:3000, unit:"steps"},
  {icon:"favorite", color:"red",value:120, unit:"bpm"},
  {icon:"wb_sunny", color:"yellow",value:-10, unit:"°C"},
  
]
  render() {
    return (
      <div className ="container-fluid row">
         {this.displayElsy.map(function(affichage) {
          return <Box icon ={affichage.icon} color={affichage.color} value ={affichage.value} unit ={affichage.unit}/>;
        })}
        <p>
        Heart : 80
        Temperature : -20
        Steps : 0
        </p>
      </div>
    );
  }
}

export default App;