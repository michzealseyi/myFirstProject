import React from "react";

const UpdatedComp = (OriginalComp: any) => {
  class NewComp extends React.Component {
    render() {
      return <OriginalComp name="the user" />;
    }
  }
  return NewComp
};

export default UpdatedComp;
