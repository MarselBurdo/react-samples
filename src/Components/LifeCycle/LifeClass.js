import React, { Component } from "react";

export default class LifeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "new",
    };
    this.handleChange = this.handleChange.bind(this);
    console.log("constructor()");
  }

  componentDidMount() {
    console.log("Mounting end");
  }

  componentDidUpdate() {
    console.log("Update end");
  }

  componentWillUnmount() {
    console.log("Unmounting end");
  }

  handleChange(e) {
    this.setState((prev) => ({ text: prev.text.concat(e.target.value) }));
  }

  render() {
    console.log("render()");
    return (
      <>
        <input name="text" type={"text"} onChange={this.handleChange} />
      </>
    );
  }
}
