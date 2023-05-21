import React from "react";
import UpdatedComp from "./HigherOrder";
export class Click extends React.Component<
  { name: string },
  { count: number }
> {
  //CONCEPT OF STATE OR STATE CONCEPT
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  //DEFINING THE FUNCTION UPDATE CLICK
  UpdateClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.UpdateClick}>
          {this.props.name} clicked {count} time
        </button>
      </div>
    );
  }
}

export default UpdatedComp(Click);
