import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleChange = e => {
    this.setState({
      tweet: e.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="tweet"
          value={this.state.tweet}
          onChange={this.handleChange}
        />
        <p>
          {this.props.maxChars - this.state.tweet.length} characters remaining.
        </p>
        <h2>{this.state.tweet}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
