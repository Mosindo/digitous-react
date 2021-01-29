import React from "react";
import './../styles/global.css';

export class Box extends React.Component {
  render() {
    if(this.props.icon !== "local_drink"){
      return (
        <div className="box col-sm-3 col-6 directions_walk">
          <span className="material-icons" style ={{fontSize : "100",color :`${this.props.color}`}}>
          {this.props.icon}
          </span>
          <p>
          {this.props.value}
          {this.props.unit}
          </p>
          <input type={this.props.type} id="volume" name="volume"
           min={this.props.min} max={this.props.max}  value={this.props.value} onChange={this.props.onChange} ></input>
        </div>   
    
      );
    }
    else{
      return (
        <div className="box col-sm-3 col-6 directions_walk">
          <span className="material-icons" style ={{fontSize : "100",color :`${this.props.color}`}}>
          {this.props.icon}
          </span>
          <p>
          {this.props.value}
          {this.props.unit}
          </p>
        </div>  
    
      );
    }
    
  }
}

export default Box;