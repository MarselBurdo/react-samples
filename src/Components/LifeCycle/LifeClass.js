import React, { Component } from "react";

export default class LifeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    console.log("constructor()");

    this.handleChange = this.handleChange.bind(this);
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
    this.setState((prev) => ({ name: prev.name.concat(e.target.value) }));
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
