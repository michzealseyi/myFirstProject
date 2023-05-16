import React, { Component } from "react";

class FormattedMoney extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  format(amount: any) {
    return parseFloat(amount).toFixed(2);
  }
  render() {
    return <span>{this.format(this.props.amount)}</span>;
  }
}
export default FormattedMoney;
