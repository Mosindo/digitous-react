import React from "react";

export class Counter extends React.Component{
    render(){
        return(
        <div>
        <h2> {this.props.count}</h2>
        <button  onClick={this.props.removeFunction}>-</button>
        <button  onClick={this.props.addFunction}>+</button>
        </div>
        );
        
    }
}

export default Counter;