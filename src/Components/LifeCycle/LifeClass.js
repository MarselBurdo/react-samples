import React, { Component } from "react";

export default class LifeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hi",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("Mounting");
  }

  componentDidUpdate() {
    console.log("Updating");
  }

  componentWillUnmount() {
    console.log("Unmounting");
  }

  handleChange = (e) => {
    this.setState((prev) => ({ text: prev.text.concat(e.target.value) }));
  };

  render() {
    console.log("render");

    return (
      <>
        <input name="text" type={"text"} onChange={this.handleChange} />
      </>
    );
  }
}
