import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clearTweet = () => {
    this.setState({ tweet: "" });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.username || !this.state.password) {
      this.setState({ tweet: "Please use a valid username and password." });
    } else {
      this.props.onSubmit(this.state);
    }
  };

  clearMessage = () => {
    this.setState({ tweet: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Username
              <input
                id="username"
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                onFocus={this.clearTweet}
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
                onChange={this.handleChange}
                onFocus={this.clearTweet}
              />
            </label>
          </div>
          <div>
            <button type="submit">Log in</button>
          </div>
        </form>
        <p>{this.state.tweet}</p>
      </div>
    );
  }
}

export default LoginForm;
