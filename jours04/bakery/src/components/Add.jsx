import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
          productName : "",
          price : 1 
        };
        this.updateProductName=this.updateProductName.bind(this);
        this.updatePrice=this.updatePrice.bind(this);

      }
      updateProductName(e){
        console.log(e)
        this.setState({ productName: e.target.value })
        console.log(this.state.productName)  
      }
      updatePrice(e){
        this.setState({ price: e.target.value })
        console.log(this.state.price)
      }

  render() {
    return(
    <div >
    <input type="type" onChange={this.updateProductName} ></input>
    <input type="range" onChange={this.updatePrice} min="0" max="11"></input>
    <p>{this.state.price}€</p>
    <button className="btn  btn-primary" onClick={this.props.test}>add</button>
    
    </div>)
  };
}

export default Add;
