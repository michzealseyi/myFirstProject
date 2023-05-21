import React, { Component } from "react";
import UpdatedComp from "./HigherOrder";
export class Counter extends Component<{ name: string }, { count: number }> {
  //CONCEPT OF STATE OR STATE CONCEPT
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  //DEFINING THE FUNCTION UPDATE Counter
  IncrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onMouseEnter={this.IncrementCount}>
          {this.props.name} increased to {count}
        </button>
      </div>
    );
  }
}

export default UpdatedComp(Counter);
