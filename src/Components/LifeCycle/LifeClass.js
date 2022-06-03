import React, { Component } from "react";

export default class LifeClass extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
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

  handleChange(e) {
    // console.log(e);

    console.log(this.state);
    this.setState({ text: this.state.text.concat(e.target.value) });
  }

  render() {
    console.log("render()");
    return (
      <>
        <input type={"text"} onChange={this.handleChange} />
      </>
    );
  }
}
