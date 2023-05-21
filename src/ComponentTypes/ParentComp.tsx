import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
class ParentComp extends Component<{}, { name: string }> {
  //to change the state of a component, we make use of a constructor. snippet is {rconst}
  constructor(props: any) {
    super(props);

    this.state = {
      name: "simplilearn",
    };
  }
  //DIDMOUNT LIFE CYCLING METHOD(TO SET A TIME INTERVAL)
  componentDidMount(): void {
    setInterval(() => {
      this.setState({
        name: "simplilearn",
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        i am the parent component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
