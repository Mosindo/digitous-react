import React from 'react';
import App from "./../App"
import 'bootstrap/dist/css/bootstrap.min.css';

export class List extends React.Component {

  render() {
    return(
        <div >
          <ul>
            <li>{this.props.items}</li>
          </ul>
       </div>)
  };
}

export default List;