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
      items: {
        name : "xx" ,
        price : "xx"
    },
    };
    this.selectedAdd=this.selectedAdd.bind(this);
    this.selectedList=this.selectedList.bind(this);
    this.selectedPay=this.selectedPay.bind(this);
    this.addItem=this.addItem.bind(this);
  }

selectedAdd(){
this.setState({activTab:"Add"});
}

selectedList(){
  this.setState({activTab:"List"});
  }

selectedPay(){
    this.setState({activTab:"Pay"});
    }
addItem (name ,price){
 console.log(this.state.items)
}
  render() {
    if(this.state.activTab=="Add")
    {return(
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
      <Button  isSelected={this.state.activTab==="Add"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.selectedAdd}>Add</Button>
      <Button isSelected={this.state.activTab==="List"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.selectedList}>List</Button>
      <Button isSelected={this.state.activTab==="Pay"?" form-control btn btn-primary":" form-control btn btn-light"} onClick={this.selectedPay}>Pay</Button>
      </div>
      <div className="col-12 d-flex justify-content-center">
      <Add test={this.addItem}/>
      </div>
    </div>
    )}
    else if (this.state.activTab=="List"){
      return (
      <div className="row">
        <div className="col-12  d-flex justify-content-center">
          <Button  isSelected={this.state.activTab==="Add"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.selectedAdd}>Add</Button>
          <Button isSelected={this.state.activTab==="List"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.selectedList}>List</Button>
          <Button isSelected={this.state.activTab==="Pay"?" form-control btn btn-primary":" form-control btn btn-light"} onClick={this.selectedPay}>Pay</Button>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <List/>
        </div>
      </div>
      )
    }
    else if (this.state.activTab=="Pay"){
      return (
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
        <Button  isSelected={this.state.activTab==="Add"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.selectedAdd}>Add</Button>
        <Button isSelected={this.state.activTab==="List"?" form-control btn btn-primary":"form-control btn btn-light"} onClick={this.selectedList}>List</Button>
        <Button isSelected={this.state.activTab==="Pay"?" form-control btn btn-primary":" form-control btn btn-light"} onClick={this.selectedPay}>Pay</Button>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <Pay/>
        </div>
      </div>
      )
    }
  };
}


export default App;