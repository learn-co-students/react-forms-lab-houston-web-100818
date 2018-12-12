import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <form onSubmit={ e => this.logIn(e) }>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}  
              onChange={e => this.handleInputChange(e)}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password}  
              onChange={e => this.handleInputChange(e)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value  
    })
  }

  logIn = (e) => {
    e.preventDefault()
    console.log(this.state)
    if (this.state.username && this.state.password) {
      this.props.onSubmit(this.state)
    }

  }
}

export default LoginForm;
