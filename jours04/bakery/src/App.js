import React, { Children } from 'react'
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      activTab: "Add",
      items: []
    };
    this.onClickAdd=this.onClickAdd.bind(this);
    this.onClickList=this.onClickList.bind(this);
    this.onClickPay=this.onClickPay.bind(this);
  }

onClickAdd(){
this.setState({activTab:"Add"});
}

onClickList(){
  this.setState({activTab:"List"});
  }

  onClickPay(){
    this.setState({activTab:"Pay"});
    }
  render() {
    return(
    <div className="Container-fluid  d-flex justify-content-start">
      <Add/>
      <Button  isSelected={this.state.activTab==="Add"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.onClickAdd}>Add</Button>
      <List/>
      <Button isSelected={this.state.activTab==="List"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.onClickList}>List</Button>
      <Pay/>
      <Button isSelected={this.state.activTab==="Pay"?" form-control btn btn-primary":" form-control btn btn-light"} onClick={this.onClickPay}>Pay</Button>
    </div>)
  };
}


export default App;