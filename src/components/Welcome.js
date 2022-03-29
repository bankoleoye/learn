import React, { Component } from "react";

class Welcome extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome Bankole"
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
  render() {
    return (
      <>
        <h1>
            {this.state.message}
            </h1>
            <button onClick={() => this.changeMessage()}>Submit</button>
      </>
    );
  }
}

export default Welcome;
