import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        if (this.state.username && this.state.password) {
          this.props.onSubmit({
            username: this.state.username,
            password: this.state.password
          });
        }
      }}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={(e) => {
              this.setState({username: e.target.value})
            }} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={(e) => {
              this.setState({password: e.target.value})
            }} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
