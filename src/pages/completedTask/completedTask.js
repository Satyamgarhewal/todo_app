import { React, Component } from "react";
import { connect } from "react-redux";
class CompletedTask extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div></div>;
  }
}

export default connect()(CompletedTask);
