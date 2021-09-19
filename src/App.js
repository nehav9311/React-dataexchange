import "./styles.css";
import React from "react";
import Statelessb from "./Statelessb";
import Counter from "./Counter";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }
  handleClick(event) {
    this.setState({ counter: ++this.state.counter });
  }
  render() {
    return (
      <div>
        <Statelessb handler={this.handleClick} />
        <br />
        <Counter value={this.state.counter} />
      </div>
    );
  }
}

export default Content;
