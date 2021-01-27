import React from "react";


export class Counter extends React.Component{
    render(){
        return(
        <div>
        <h2> {this.props.count}</h2>
        <button  onClick={this.decrementCount}>-</button>
        <button  onClick={this.incrementCount}>+</button>
        </div>
        );
        
    }
}

export default Counter;