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
    if(this.state.activTab=="Add")
    {return(
    <div className="Container-fluid  d-flex justify-content-start">
      <Button  isSelected={this.state.activTab==="Add"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.onClickAdd}>Add</Button>
      <Button isSelected={this.state.activTab==="List"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.onClickList}>List</Button>
      <Button isSelected={this.state.activTab==="Pay"?" form-control btn btn-primary":" form-control btn btn-light"} onClick={this.onClickPay}>Pay</Button>
      <Add/>
    </div>)}
    else if (this.state.activTab=="List"){
      return (
      <div className="Container-fluid  d-flex justify-content-start">
        <Button  isSelected={this.state.activTab==="Add"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.onClickAdd}>Add</Button>
        <Button isSelected={this.state.activTab==="List"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.onClickList}>List</Button>
        <Button isSelected={this.state.activTab==="Pay"?" form-control btn btn-primary":" form-control btn btn-light"} onClick={this.onClickPay}>Pay</Button>
        <List/>
      </div>
      )
    }
    else if (this.state.activTab=="Pay"){
      return (
      <div className="Container-fluid  d-flex justify-content-start">
        <Button  isSelected={this.state.activTab==="Add"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.onClickAdd}>Add</Button>
        <Button isSelected={this.state.activTab==="List"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.onClickList}>List</Button>
        <Button isSelected={this.state.activTab==="Pay"?" form-control btn btn-primary":" form-control btn btn-light"} onClick={this.onClickPay}>Pay</Button>
        <Pay/>
      </div>
      )
    }
  };
}


export default App;