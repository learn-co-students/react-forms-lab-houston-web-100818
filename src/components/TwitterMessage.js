import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleInputChange = event => {
    console.log(this.state);
    // this.setState({
    //   [event.target.name]: event.target.value
    // }); abstraction won't pass the tests?? weird

    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          id="message"
          type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        <p>{this.props.maxChars - this.state.message.length} Characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
