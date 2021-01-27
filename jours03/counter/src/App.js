import React from "react";
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state={
      count: 0
    }
  }
  let increment = () => {
    const updatedIncrement = this.state.count; // crée une copie dans une variable safe
    updatedIncrement++; // update la copie avec un ajout

    this.setState({ count: updatedIncrement }); // update le state avec la copie à jour !
}
  render() {
    return (
      <div>
        <h1 className="text-primary">Counter</h1>
        <h2> {this.state.count}</h2>
        <button >-</button>
        <button  onclick={increment}>+</button>
      </div>
    );
  }
}

export default App;
