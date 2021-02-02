import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Button extends React.Component {

  render() {
    return(
    <div>
     <button className={this.props.isSelected} onClick={this.props.onClick}>{this.props.children}</button>
    </div>)
  };
}

export default Button;