import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message} onChange={e => {this.handleChange(e)}} />
        <p><i>{this.props.maxChars - this.state.message.length} characters remaining.</i></p>
        <h4>{this.state.message}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
