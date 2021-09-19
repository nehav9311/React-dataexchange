import React from "react";

class Counter extends React.Component {
  render() {
    return <span>Clicked {this.props.value} times.</span>;
  }
}

export default Counter;
