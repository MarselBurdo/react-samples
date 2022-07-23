import React, { Component } from "react";

export default class LifeClass extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);

    console.log("constructor()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }

  handleChange = (e) => {
    this.setState((prev) => ({ text: prev.text.concat(e.target.value) }));
  };

  render() {
    console.log("render()");
    return (
      <>
        <input name="text" type={"text"} onChange={this.handleChange} />
      </>
    );
  }
}
