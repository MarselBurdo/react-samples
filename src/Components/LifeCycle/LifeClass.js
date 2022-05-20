import React, { Component } from "react";

export default class LifeClass extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      counter: 0,
    };
  }

  handleChange(e) {
    // console.log(e);
    // this.setState((prev) => ({
    //   ...prev,
    //   text: this.state.text.concat(e.target.value),
    // }));
    this.setState((prev) => ({ ...prev, counter: prev.state.counter + 1 }));
  }
  componentDidMount() {
    console.log("Mounting");
  }

  componentDidUpdate(prevState, prevProps) {
    console.log("Update");
  }
  componentWillUnmount() {
    console.log("Unmounting");
  }
  render() {
    const { handleChange, state } = this;

    console.log(state);
    return (
      <>
        <input type={"text"} onChange={handleChange} />
      </>
    );
  }
}
