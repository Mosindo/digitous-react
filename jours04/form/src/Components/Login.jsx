import React from 'react'

export class Login extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      emailValid:false,
      passwordValid:false,
      email:"",
      password:"",
      submit:""
    };
    this.onChangeEmail=this.onChangeEmail.bind(this);
  }
  onChangeEmail(event){
    console.log(event);
    this.setState({email:event.target.value})
    console.log('email',this.state.email)
  }
  render(){
    return(
      <form>
      <div className="form-group">
        <label >Email address</label>
        <input onchange={this.onChangeEmail} type="email" className={`${this.props.validation1}`}  aria-describedby="emailHelp" placeholder="Enter email" onInput={this.props.Change}/>
      </div>
      <div className="form-group">
        <label >Password</label>
        <input type="password" className={`${this.props.validation2}`}  placeholder="Password" onInput={this.props.Change}/>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label" >Remember me</label>
      </div>
      <button type="submit" className="btn btn-primary"> Submit </button>
    </form>);
  };
}

export default Login;