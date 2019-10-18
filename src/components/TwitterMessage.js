import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingCharacters: this.props.maxChars,
      myMessage: ""
    };

  }
  handleTwitterChange = (e) =>{
      this.setState({
        remainingCharacters: (this.props.maxChars - e.target.value.length),
        myMessage: e.target.value
      })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.myMessage} onChange={this.handleTwitterChange}/>
        <p>
          {this.state.remainingCharacters} characters remaining.
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
