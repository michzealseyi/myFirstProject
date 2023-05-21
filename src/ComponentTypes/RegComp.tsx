import React, { Component } from "react";

export class RegComp extends Component<{ name: string }, { count: number }> {
  render() {
    return <div>i am the regular component {this.props.name}</div>; //including the property name
  }
}

export default RegComp;
