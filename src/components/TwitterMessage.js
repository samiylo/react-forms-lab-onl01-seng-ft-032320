import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      maxChar: this.props.maxChars
    };
  }

  handleCount = event => {
    let countLeft = this.state.maxChar - this.state.message.length
    return countLeft
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
      
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={event => this.handleMessage(event)} name="message" id="message" />
        <p>Characters left: {this.handleCount()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
