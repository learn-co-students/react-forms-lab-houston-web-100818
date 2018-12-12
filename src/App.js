import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {
  login = fields => {
    const username = fields.username;
    const password = fields.password;
    // let { username, password } = fields
    console.log(`Logging in ${username} with password ${password}`);
  };

  twitter = ({ tweets }) => {
    console.log(`this is your tweet ${tweets}`);
  };

  render() {
    return (
      <div>
        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm onSubmit={this.login} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage maxChars={140} />
      </div>
    );
  }
}

export default App;
