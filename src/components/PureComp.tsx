import React, { PureComponent } from "react";

export class PureComp extends PureComponent<
  { name: string },
  { count: number }
> {
  render() {
    return <div>i am the pure component {this.props.name}</div>;
  }
}

export default PureComp;
