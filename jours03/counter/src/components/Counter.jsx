import React from "react";
const {count ,removeFunction,addFunction= this.props}//2 eme option pour les props dans le fichier enfant ,donc retirer "this.props dans le render"
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